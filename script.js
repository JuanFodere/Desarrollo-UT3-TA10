function getSum(numeros){
    let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log(suma); 

}

const numeros = [1, 2, 3, 4, 5];
getSum(numeros)