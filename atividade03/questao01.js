
const aprovacao = function (){

    var aprovados = [
        {candidato: "Renata Soares", nota: 7.8, idade:29},
        {candidato: "Marcos Teixeira", nota: 7.8 , idade: 26},
        {candidato: "Priscila Gomes", nota: 7.8 , idade:30},
        {candidato: "João Oliveira", nota: 7.8 , idade:27},
        {candidato: "Adriana Telles", nota: 7.8 , idade:28}   
    ];

    let estudanteSelect = function (controle){

        if (controle.idade >= 28 && controle.idade <= 30){
                console.log(controle)
        }

    }

    for(num = 0; num < aprovados.length ; num++){
        estudanteSelect(aprovados[num])
     }

}

console.log(aprovacao())
     
 
 
      
