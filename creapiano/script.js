let piano = [
    { name: 'c1',sonido="./sonido/c1" ,tono: true },
    { name: 'c1s',sonido="./sonido/c1s", tono: false },
    { name: 'c2',sonido="./sonido/c2", tono: true },
    { name: 'd1s',sonido="./sonido/d1s", tono: false },
    { name: 'd1',sonido="./sonido/d1", tono: true },
    { name: 'e1',sonido="./sonido/e1", tono: true },
    { name: 'f1s',sonido="./sonido/f1s", tono: false },
    { name: 'f1',sonido="./sonido/f1", tono: true },
    { name: 'g1s',sonido="./sonido/g1s", tono: false },
    { name: 'g1',sonido="./sonido/g1", tono: true },
    { name: 'a1s',sonido="./sonido/a1s", tono: false },
    { name: 'a1',sonido="./sonido/a1s", tono: true },
];

//Parsea
// function associateAndPlayNotes(arrNotes, elementN){
//     let finalHtml='';
//     arrNotes.forEach(element => {
//         finalHtml+=element.tono?<div class="note" data-snd="${element.sonido}"></div>
//     });

//     document.getElementById(divN).innerHTML = finalHtml;
//    associateAndPlayNotes();
// }


function associateAndPlayNotes() {
    let player = document.getElementById('player');

    document.querySelectorAll('section div').forEach(notadiv => {
        notadiv.onclick = function () {
            player.src = this.getAttribute('data-sonido');
            player.play();
        }
    });
}

associateAndPlayNotes();