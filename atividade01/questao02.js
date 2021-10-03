var numeros = function (){

    var array = [];
    let cont = -1

    for (num=100; num<=449; num++){
        if (num % 2 == 0){
            cont++;
            array[cont] = num
        }
    } return array

}

console.log(numeros())