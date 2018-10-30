$.ajax({
    url: "http://www.mocky.io/v2/5bd88af2310000df39474f1b"
}).done(function (dataNotas) {
    console.log(dataNotas);
    generateStructure(dataNotas, 'piano');
});

function associateAndPlayNotes() {
    let player = document.getElementById('player');

    document.querySelectorAll('section').forEach(element => {
        element.onclick = function () {
            let idx = this.getAttribute ('data-idx');
            player.src = notas[idx].sonido;
            player.play();
        }
    });

}

associateAndPlayNotes();

function generateStructure(arrNotes, divN) {
    let finalHtml = '';

    arrNotes.forEach(element => {
        finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>` : `<div class="note semi" data-snd="${element.sonido}"></div>`;
    });

    document.getElementById(divN).innerHTML = finalHtml;
    associateAndPlayNotes();
}

function associateAndPlayNotes() {
    let player = document.getElementById('player');

    document.querySelectorAll('.note').forEach(element => {
        element.onclick = function () {
            player.src = this.getAttribute('data-snd');
            player.play();
        }
    });

}