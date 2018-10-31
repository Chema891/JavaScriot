console.log(window.localStorage.getItem('palabra_almacenada'));

let amigossRetStr = window.localStorage.getItem('lista_amigos');
let amigossRet = JSON.parse(amigossRetStr);

document.getElementById('amigos').innerHTML = (function(param) {
    let html = '';

    amigossRet.forEach(element => {
        html += `<li>${param} - ${element.name} | ${element.email}</li>`;
    });

    return html;
})('JODERRRRRRRRR');