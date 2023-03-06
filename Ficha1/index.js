function calculateFinalGrade(np, nt){
    var nf = np * 0.6 + nt * 0.4
    if (nf>=9.5){
        console.log("APROVADO")
    }
    else{
        console.log("REPROVADO")
    }
    return nf
}
var FinalGrade = calculateFinalGrade(14,12)
//console.log(FinalGrade)

function nome_mes(numero_mes){
    if (numero_mes == 1) {
        console.log("JANEIRO")
    }
    if (numero_mes == 2) {
        console.log("FEVEREIRO")
    } 
    if (numero_mes == 3) {
        console.log("MARÇO")
    }
    if (numero_mes == 4) {
        console.log("ABRIL")
    }
    if (numero_mes == 5) {
        console.log("MAIO")
    }
    if (numero_mes == 6) {
        console.log("JUNHO")
    }
    if (numero_mes == 7) {
        console.log("JULHO")
    }
    if (numero_mes == 8) {
        console.log("AGOSTO")
    }
    if (numero_mes == 9) {
        console.log("SETEMBRO")
    }
    if (numero_mes == 10) {
        console.log("OUTUBRO")
    }
    if (numero_mes == 11) {
        console.log("NOVEMBRO")
    }
    if (numero_mes == 12) {
        console.log("DEZEMBRO")
    }

}

function getMonth(monthNumber){

    var months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    if(monthNumber >=1 && monthNumber <=12)
        console.log(months[monthNumber - 1]);
    else
        console.log("Mês inválido");

}

var ver_mes = getMonth(7)
//console.log(ver_mes)

var mes = nome_mes(5)
//console.log(mes)

function operacoes (v1,v2,operacao){
    if (operacao=="+"){
        resultado = v1 + v2
        console.log("O resultado da soma é",resultado)
    }
    else if (operacao=="-"){
        resultado = v1 - v2
        console.log("O resultado da subtração é",resultado)
    }
    else if (operacao=="*"){
        resultado = v1 * v2
        console.log("O resultado da multiplicação é",resultado)
    }
    else if (operacao=="/"){
        resultado = v1 / v2
        console.log("O resultado da divisão é",resultado)
    }
    else if (operacao=="^"){
        resultado = v1 ^ v2
        console.log("O resultado é",resultado)
    }
}

var conta = operacoes(5,3,"+")
//console.log(conta)


function multiplos5(){
    cont = 0
    resultado = 0
    multiplos = []
    
    while (resultado<20){
        resultado = cont * 5
        if (resultado<20)
            console.log(resultado)
        cont += 1
    }

    return multiplos
}

var multiplos = multiplos5()
console.log(multiplos)

function multupleOf(multiplo,limite){
    for (var i = multiplo; i < limite ; i+=multiplo){
        console.log(i)
    }
}

function cem(){
    var cont = 1;
    var soma = 0;
    while (cont<=100){
        soma += cont;
        cont += 1;
    }
    console.log(soma);
    return soma;

}

var soma_cem = cem();
console.log(soma_cem);


function fatorial(n){
    var fact = 1
    for (var i=n; i > 1; i--){
        fact *= i;
    }
    return fact;
}

var f = fatorial(5);
console.log(f);


function min(array){
    var m = array[0];
    for(var i=0; i<array.length; i++){
        if(array[i] < m)
        m = array[i];
    }
    return m;
}


function min(array){
    var m = array[0];
    for(var i=0; i<array.length; i++){
        if(array[i] > m)
        m = array[i];
    }
    return m;
}

function media(array){
    
}

var array1 = [2,3,7,9,0,10];
var array2 = [2,3,7,9,0,10,99];


console.log(array1.length);

min(array1);
min(array2);

function media(array){
    var sum = 0;
    for(var i=0; i<array.length; i++){
        sum += array[i]
    }
    var avg = sum/array.length
    return avg;
    
}

console.log(media(array1));