//PRIMEIRO API

function renderiza_foto(foto){
    const img_foto = document.getElementById('foto');
    img_foto.src=`${foto}`;
};

function renderiza_name(name){
    const github_name = document.getElementById('name');
    github_name.innerText=`${name}`;
};

function renderiza_link(hub_link){
    const github_link = document.getElementById('hub_link');
    github_link.innerText=`${hub_link}`;
    github_link.href=`${hub_link}`;
};


function renderiza_repositorio(repositorio){
    const repositorio_link = document.getElementById('repositorio');
    let tabela = "<tr>";
    tabela += `<td><a href="${repositorio.html_url}">${repositorio.name}<br><br></a></td> `;
    tabela += "</tr>";
    repositorio_link.innerHTML += tabela;
}


const headers = new Headers()
headers.append('Autorization', 'token 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');

fetch("https://api.github.com/users/Kiban88")
.then(response => response.json())
.then(data => {
    console.log(data);
    renderiza_foto(data.avatar_url);
    renderiza_name(data.name);
    renderiza_link(data.html_url);
})

.catch(error =>{
    console.error('algo deu errado', error);
})

.finally((finalizar)=>{
    console.warn('Finalizado');
});

fetch("https://api.github.com/users/Kiban88/repos")
.then(response => response.json())
.then(data => {
    for (let repositorio of data){
        renderiza_repositorio(repositorio);
    }
})

.catch(error =>{
    console.error('algo deu errado', error);
})

.finally((finalizar)=>{
    console.warn('Finalizado');
});



