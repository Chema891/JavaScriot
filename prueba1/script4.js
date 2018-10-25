let u1_name="Chema"
let u1_surname="Párraga"

let u2_name = "Sara"
let u2_surname = "Perez"

let u3_name = "Paloma"
let u3_surname = "Sainz"


console.log(u1_name+' '+u1_surname);
console.log(u2_name+' '+u2_surname);
console.log(u3_name+' '+u3_surname);

// almacenamos valores con variables
// hay variables especiales en la que podemos almacenar una secuencia de codigo complejo que son las funciones

function generarNombreCompleto(unNombre, unApellido){
    let nombre_mod="*"+unNombre+"*";
    let app_mod="//"+unApellido+"//";
    return nombre_mod+" "+app_mod;
}

console.log( generarNombreCompleto(u1_name, u1_surname) );
console.log( generarNombreCompleto (u2_name, u2_surname) );
console.log( generarNombreCompleto (u3_name, u3_surname) );