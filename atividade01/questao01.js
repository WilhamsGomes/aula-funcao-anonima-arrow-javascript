let array = ["Pernambuco", "Alagoas", "Bahia", "Goiás", "Ceará"]

var estados = function (array){

    let valorConverte = array;

   
    let stringA = valorConverte.join(" ") //convertendo em String
    stringA = stringA.toUpperCase()


    var aux = stringA //recebendo string
    var aux02 = aux.split(" ") //convertendo em array

    console.log(aux02)

}

console.log(estados(array))
