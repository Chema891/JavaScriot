let saludaBtns = document.getElementsByClassName('saluda');
console.log(saludaBtns);

for (let index = 0; index < saludaBtns.length; index++) {
    saludaBtns[index].onclick = function () {
        let name = this.getAttribute('data-name');
        let idp = this.getAttribute('data-idp');
        let infop = document.getElementById(idp).innerHTML
        alert(infop + 'Hola!!! ' + name + ' soy Omarri, maricon, miercoles pedako no¿?¿?');
        // removeElement(idp); asi borraría el parrafo!!
    }
}

let saludaBorrar = document.getElementsByClassName('borra');
console.log(saludaBorrar);

for (let index = 0; index < saludaBorrar.length; index++) {
    saludaBorrar[index].onclick = function () {

        let idi = this.getAttribute('data-idi');
        removeElement(idi);
    }

}

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}