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

//var test1 = indicemassacorporal(200,2);
//console.log(test1);


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

//var test2 = inverso("Hoje e Domingo");
//console.log(test2);

function contavogais(string){
    cont = 0;
    for(var i = 0; i < string.length; i++){
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            cont += 1;
        }
    }
    return cont;
}

//var test3 = contavogais("Hello World");
//console.log(test3);

function detetar (string,letra){
    cont = 0;
    for(var i = 0; i < string.length; i++){
        if (string[i]==letra){
            cont += 1;
        }
    }
    return cont;
}

//var test4 = detetar("hello world","l");
//console.log(test4);

function tempotrabalho (hs,ms,ss,hq,mq,sq){

    var soma_segundos_saida = (hq*3600) + (mq * 60 ) + sq ;
    var soma_segundos_entrada = (hs*3600) + (ms * 60 ) + ss ;
    var total_segundos_trabalho = soma_segundos_saida - soma_segundos_entrada;
    
    var horas_trabalho = total_segundos_trabalho % 3600;
    var segundos_trabalho = horas_trabalho % 60
    var m = (horas_trabalho - segundos_trabalho) / 60;
    var h = ( total_segundos_trabalho - horas_trabalho) / 3600 ;



    //console.log("H: " + h + " M: " + m + " S: " + segundos_trabalho);
}

//var test5 = tempotrabalho(8,0,0,9,2,5);
//console.log(test5);

function retangulo (largura,altura){
    var c= "";
    for(var j=0; j<largura; j++){
        c+="*"
    }

    for(var i=0; i<altura;i++){
        console.log(c)
    }

}

var test6 = retangulo(20,22);
console.log(test6);

function triangulo (altura) {
    var t = "";

    for (i = 0; i < altura ; i ++){

        console.log(t += "*");
    }

        
}

triangulo(20);