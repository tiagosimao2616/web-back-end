//ex 1 consição fisica
function pesoSaudae(p,a){
    estado = p/(a*a)
    console.log(estado)
    if(estado <= 18.5)
        console.log("abaixo do peso");
    else if (estado > 18.5 && estado <= 25)
        console.log("no peso normal");
    else if (estado > 25 && estado <= 30)
        console.log("acima do peso")
    else
        console.log("obeso")
}

pesoSaudae(70,1.78)

function inverteString(stro){
    var novastr = "";
    var invert = ""
    var strseparada = stro.split(" ")
    for(var str in strseparada){
        invert = ""
        for(var x in strseparada[str]){
            invert = strseparada[str][x] + invert
        }
        novastr =novastr + " " + invert
    }
    console.log(novastr)
}

inverteString("Hoje é domingo")

function vogais(str){
    var nvogais = 0;
    var vogais = ['a','e','i','o','u'];
    for(x in str){
        if(vogais.includes(str[x])){
            nvogais++;
        }
    }
    console.log(nvogais)
}

//vogais("hoje e domingo")

function verfLeter(str,letra){
    ocurrencia = 0
    str = str.toLowerCase()
    for(x in str){
        if(str.includes(letra)){
            ocurrencia++;
        }
    }
    console.log(ocurrencia);
}

//verfLeter("hoje e domingo",'o');

function horasDeTrabalho(entrada,saida){
    entrada_hora = entrada.split(":")
    saida_hora = saida.split(":")

    entrada_hora_segundos = (parseInt(entrada_hora[0]) * 3600) + (parseInt(entrada_hora[1]) * 60) + (parseInt(entrada_hora[2]))
    saida_hora_segundos = (parseInt(saida_hora[0]) * 3600) + (parseInt(saida_hora[1]) * 60) + (parseInt(saida_hora[2]))

    total_segundos = entrada_hora_segundos - saida_hora_segundos

    minutos_r = total_segundos % 3600; 
    segundos_r = minutos_r % 60;

    total_horas = (total_segundos - minutos_r) / 3600
    total_minutos = (minutos_r -  segundos_r) / 60
    total_segundos = segundos_r

    console.log(Math.abs(total_horas)+":"+Math.round(Math.abs(total_minutos))+":"+Math.round(Math.abs(total_segundos)))
}

//horasDeTrabalho("8:00:00","8:00:00")

function desenhaRetangulo(largura, altura){
    var l = 0;
    var a = 0;
    var str = ""
    console.log("largura: "+ largura)
    console.log("altura: "+ altura)
    while(a < altura){
        while(l < largura){
            str = str + "*";
            l++;
        }
        console.log(str);
        a++;
    }
}

desenhaRetangulo(5,5)

function desenharTriangulo(altura){
    var largura = 1
    var a = 0;
    var l = 0;
    str = "";
    console.log("altura: "+altura)
    while(a < altura){
        while(l != largura){
            str = str + "*";
            l++
        }
        console.log(str);
        largura++;
        a++;
    }
}

desenharTriangulo(10)

function desenharCaixa(lado){
    var l = 0
    var l2 = 0
    str = ""
    console.log("lado: "+lado)
    while(l < lado){
        if(l == 0 || l == lado-1){
            while(l2 != lado-2){
                str = str + "*";
                l2++
            }
        }else{
            while(l2 != lado-2){
                str = str + " ";
                l2++
            }
        }
        console.log("*"+str+"*")
        str = ""
        l2 = 0
        l++
    }
}

desenharCaixa(10)