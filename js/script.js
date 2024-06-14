// // Valor de Retorno

// let numeroPI= prompt("indica un numero");

// function esPar(numero){

//     if(numero%2==0){
//         return true;
//     } else {
//         return false;
//     }


// }

// let respuesta=esPar(numeroPI); //Es de tipo booleano

// if(respuesta){ //respuesta  = true
//     alert("Es par");
// }else{ //respuesta = false
//     alert("Es impar")
// }

// //se puede poner el alert en el if else de arriba, pero es para verlo con mas claridad lo que devuelve(true, false)

// //Ejercicio .... pide 10 veces un numero y muestra cada vez si es par o impar

// // function ParImpar(numero){
// //     if(numero%2==0){
// //         alert("Es par");
// //         return true;
// //     } else{
// //         alert("Es impar");
// //         return false;
// //     }
// // }

// // for (let i = 0; i < 10; i++) {
// //      let numero2 = prompt("Escribe un nuevo numero"); 
// //      ParImpar(numero2);
// // }


// var numero1= 7;
// var numero2= 8;
// function menor(primero,segundo) {
//     var elenor= primero;
//     if(segundo < primero){
//         elmenor = segundo
//        return elmenor;     
//     }   
// }
// console.log(menor(numero1,numero2))

// //Escribe una función que reciba como parámetros un precio y un porcentaje de descuento y devuelva el precio nuevo


function resultado(){
    for (let i = 0; i < 10; i++) {
        let precio = Number(prompt("Introduce un precio"));
        let descuento = Number(prompt("Introduce un descuento"));
        descuento = (descuento/100)*precio;
        let precioFinal = precio-descuento;
        alert("El precio final es " + precioFinal + "€");
    }
}

resultado();


