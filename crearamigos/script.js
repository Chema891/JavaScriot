let amigos = [
    { name: 'Manolo', email: 'm@m.es' },
    { name: 'Sara', email: 's@s.es' },
    { name: 'Dani', email: 'd@d.es' },
    { name: 'Klara', email: 'k@k.es' },
];

//Parsea
function parseaAmigos(amigos) {
    let listaUL = document.getElementById('listaAmigos');


    for (let index = 0; index < amigos.length; index++) {
        listaUL.innerHTML += `<li>
        <div>${amigos[index].name}</div>
        <div>${amigos[index].email}</div>
        <div><button class="saluda" data-value=${amigos[index].name}">Saludar</button></div>
    </li >`;
    }
}

parseaAmigos(amigos)


//procesar

function saludaAmigos(classbtn, attriname) {
    let saludaBtns = document.getElementsByClassName(classbtn);
    for (let index = 0; index < saludaBtns.length; index++) {
        saludaBtns[index].onclick = function () {
            alert(this.getAttribute(attriname));
        }
    }
}

saludaAmigos ('saluda','data-value');
