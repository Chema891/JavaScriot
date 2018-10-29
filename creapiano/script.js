let piano = [
    {name: 'c1', sonido: './c1.waw', tono:true},
    {name: 'c1s', sonido: './c1s.waw', tono:false},
    {name: 'c2', sonido: './c2.waw', tono:true},
    {name: 'd1s', sonido: './d1s.waw', tono:false},
    {name: 'd1', sonido: './d1.waw', tono:true},
    {name: 'e1', sonido: './e1.waw', tono:true},
    {name: 'f1s', sonido: './f1s.waw', tono:false},
    {name: 'f1', sonido: './f1.waw', tono:true},
    {name: 'g1s', sonido: './g1s.waw', tono:false},
    {name: 'g1', sonido: './g1.waw', tono:true},
    {name: 'a1s', sonido: './a1s.waw', tono:false},
    {name: 'a1', sonido: './a1.waw', tono:true},
]

//Parsea
function generateStructure(arrNotes, divN){
    let finalHtml='';
    arrNotes.forEach(element => {
        finalHtml+=element.tono?`<div class="note" data-snd" 
    });

    = function
}


function parseaPiano(piano) {
    let listaUL = document.getElementById('listaAmigos');


    for (let index = 0; index < piano.length; index++) {
        listaUL.innerHTML += `<li>
        <div>${piano[index].name}</div>
        <div>${piano[index].sonido}</div>
        <div>${piano[index].tono}</div>

        <div><button class="saluda" data-value=${piano[index].name}">Saludar</button></div>
    </li >`;
    }
}