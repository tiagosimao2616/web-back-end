function indicemassacorporal (peso,altura){
    var imc = peso / (altura*altura);
    if (imc<18,5)
        console.log("abaixo do peso", imc);
    else if (imc>=18,5 && imc<=25)
        console.log("no peso normal", imc);
    else if (imc>=25 && imc<=30)
        console.log("acima do peso", imc);
    else if (imc>30)
        console.log("obeso", imc);
    }

var test = indicemassacorporal(100,2)
console.log(test)
