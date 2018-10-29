function opNumArr(arr, op) {
    let resultado;
 
    if (op == '+')  resultado = 0;
    else if (op == '-')  resultado = (arr && arr[0])?arr[0]:0;
    else if (op == '*') resultado = 1;
    else if (op == '/') resultado = (arr && arr[0])?arr[0]:0;
 
    for (let i = 0; i < arr.length; i++) {
        resultado = operarNumeros(resultado , arr[i],op);
    }
 
    return resultado;
 }