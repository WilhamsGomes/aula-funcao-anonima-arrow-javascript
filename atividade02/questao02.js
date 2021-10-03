const signo = (dia, mes) => {

    if ( (dia >= 21 && mes == 03) || (dia <= 20 && mes ==04) ){
        return "Áries"
    } 
    else if ((dia >= 21 && mes == 04) || (dia <= 20 && mes ==05) ){
        return "Touro"
    }
    else if ((dia >= 21 && mes == 05) || (dia <= 20 && mes ==06) ){
        return "Gêmeos"
    }
    else if ((dia >= 21 && mes == 06) || (dia <= 22 && mes ==07) ){
        return "Câncer"
    }
    else if ((dia >= 23 && mes == 07) || (dia <= 22 && mes ==08) ){
        return "Leão"
    }
    else if ((dia >= 23 && mes == 08) || (dia <= 22 && mes ==09) ){
        return "Virgem"
    }
    else if ((dia >= 23 && mes == 07) || (dia <= 22 && mes ==10) ){
        return "Libra"
    }
    else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes ==11) ){
        return "Escorpião"
    }
    else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes ==12) ){
        return "Capricórnio"
    }
    else if ((dia >= 22 && mes == 12) || (dia <= 18 && mes ==01) ){
        return "Aquário"
    }
    else if ((dia >= 19 && mes == 02) || (dia <= 20 && mes ==03) ){
        return "Peixes"
    }



}

console.log(signo(19,10))