function indicemassacorporal (peso,altura){
    
    var imc = peso / (altura*altura);
    
    if (imc<18.5){
        console.log("abaixo do peso", imc);
    }
    else if (imc>=18.5 && imc<=25){
        console.log("no peso normal", imc);
    }
    else if (imc>=25 && imc<=30){
        console.log("acima do peso", imc);
    }
    else if (imc>30){
        console.log("obeso", imc);
    }
}

var test1 = indicemassacorporal(200,2);
console.log(test1);


function inverso (string){
    var reversed = "";
    var array = string.split(" ",3);
    for(var i = 0; i<array.length; i++){
        const word = array[i];
        for(var j = word.length - 1 ; j>=0; j--){
            reversed += word[j];
        }
        reversed+=" ";
    }
    return reversed;
}

var test2 = inverso("Hoje e Domingo");
console.log(test2);

function contavogais(string){
    cont = 0;
    for(var i = 0; i < string.length; i++){
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            cont += 1;
        }
    }
    return cont;
}

var test3 = contavogais("Hello World");
console.log(test3);

function detetar (string,letra){
    cont = 0;
    for(var i = 0; i < string.length; i++){
        if (string[i]==letra){
            cont += 1;
        }
    }
    return cont;
}

var test4 = detetar("hello world","l");
console.log(test4);