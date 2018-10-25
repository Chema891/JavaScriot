// let mascotita = [];



// for (let index = 0; index < 1000; index++) {
//     mascotita[index] = 'Perrito ' + (index + 1);
// }
// // console.log(mascotita)

// for (let index = 0; index < 1000; index++){
// if (index == 0) {
//     console.log("Perrito " + index + " no tiene hermano");
// }
// else {
//     console.log("Perrito " + index + " es hermano " + mascotita[index])
// }    
// }

let mascotita = []
let i=0

while (i<1000) {
    mascotita[i]= 'Perrito ' + (i+1);
    console.log("Perrito "+i+" es hemano de " + mascotita[i]);
    i++;
}