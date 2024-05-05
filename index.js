let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayNumerosPares = [0, 2, 4, 6, 8];
arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

function suma(a, b){
    return a + b;
}
function potenciacion(a, b){
    return a ** b;
}
function separarPalabras(str){
    return str.split(' ');
}
function repetirString(str, num){
    let nuevoString = '';
    for (let i = 0; i < num; i++){
        nuevoString += str;
    }
    return nuevoString;
}
function esPrimo(num) {
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}

function ordenarArray(arr){
    return arr.sort(function(a, b){
        return a - b;
    })
}

function obtenerPares(arr){
    return arr.filter((number) => number % 2 === 0);
}

function pintarArray(arr){
    let nuevoArray = arr[0].toString();
    for (let i = 1; i < arr.length; i++){
        nuevoArray += ', ' + arr[i].toString();
    }
    return '[' + nuevoArray + ']';
}

function arrayMapi(arr, funcion){
    let arrayFuncion = [];
    for (i = 0; i < arr.length; i++){
        arrayFuncion[i] = funcion(arr[i]);
    }
    return arrayFuncion;
}

function eliminarDuplicados(arr){
    let arrayLimpio = [];
    for (i = 0; i < arr.length; i++){
        if (!arrayLimpio.includes(arr[i])){
            arrayLimpio.push(arr[i]);
        }
    }
    return arrayLimpio;
}

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ['Hola', 'Mundo'];
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

function multiplicacion(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

function esPar(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

function resta(a, b){
    return a - b;
}

let arrayFunciones = [suma, resta, multiplicacion];

function ordenarArray2(arr){
    return arr.sort(function(a, b){
        return b - a;
    })
}

function obtenerImpares(arr){
    return arr.filter((number) => number % 2 === 1);
}

function sumarArray(arr){
    let sumatorio = 0;
    for (i = 0; i < arr.length; i++){
        sumatorio += arr[i];
    }
    return sumatorio;
}
function multiplicarArray(arr){
    let multiplicado = 1;
    for (i = 0; i < arr.length; i++){
        multiplicado *= arr[i];
    }
    return multiplicado;
}

