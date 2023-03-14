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

function tempotrabalho (hs,ms,ss,hq,mq,sq){

    var soma_segundos_saida = (hq*3600) + (mq * 60 ) + sq ;
    var soma_segundos_entrada = (hs*3600) + (ms * 60 ) + ss ;
    var total_segundos_trabalho = soma_segundos_saida - soma_segundos_entrada;
    
    var horas_trabalho = total_segundos_trabalho % 3600;
    var segundos_trabalho = horas_trabalho % 60
    var m = (horas_trabalho - segundos_trabalho) / 60;
    var h = ( total_segundos_trabalho - horas_trabalho) / 3600 ;



    console.log("H: " + h + " M: " + m + " S: " + segundos_trabalho);
}

var test5 = tempotrabalho(8,0,0,9,2,5);
console.log(test5);

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

function caixa (lado){
    var box = "";
    for(var i = 0; i < lado ; i++){
        for(var j = 0; j < lado; j++){
            if(i==0 || i == lado - 1 || j == 0 || j == lado - 1){
                box += "*";
            }
            else{
                box += " "
            }
            }
            box += "\n"
        }
        console.log(box);
    }

caixa(10)

function notas (array1){
    var melhor_nota = array1[0][1];
    var pior_nota = array1 [0][1];
    var negativas = 0;
    var positivas = 0;
    var soma = 0;
    var media = 0;
    var array2 = [];
    for(var i = 0; i < array1.length; i++){
        console.log(array1[i][1])
        soma += array1[i][1];
        if (array1[i][1]>melhor_nota){
            melhor_nota = array1[i][1]
        }
        if (array1[i][1]<pior_nota){
            pior_nota = array1[i][1]
        }
        if (array1[i][1]>=0 && array1[i][1]<10){
            negativas += 1;
        }
        if (array1[i][1]>=10 && array1[i][1]<=20){
            positivas += 1
        }

    }
    media = soma / array1.length;
    for(var j = 0; j < array1.length; j++){
        if (media>array1[j][1]){
            array2 += [media-array1[j][1]];
        }
        else if (media<array1[j][1]){
            array2 += [array1[j][1]-media];
        }
        console.log(array2);
    }
    console.log("Melhor nota: " + melhor_nota + "\n" + "Pior nota: " + pior_nota + "\n" + "Positivas: " + positivas + "\n" + "Negativas: " + negativas )
   console.log("S: " + soma + "M: " + media)

}

notas([["João",20],["Tiago",15],["Pedro",10],["Ana",8],["Maria",7]])


var student1 = {name: "Pedro Alves", grade: 20, number: 678};
var student2 = {name: "Ana Maria", grade: 16, number: 679};
var student3 = {name: "João Silva", grade: 11, number: 680};
var student4 = {name: "Vasco Teixeira", grade: 6, number: 681};
var student5 = {name: "Luís Santos", grade: 7, number: 682};

var studentList = [];

studentList.push(student1);
studentList.push(student2);
studentList.push(student3);
studentList.push(student4);
studentList.push(student5);


function averageGrade(studentList){
    var sum = 0;
    for(var i=0; i<studentList.length; i++){
        sum += studentList[i].grade;
    }
    var avg = sum/studentList.length;
    return avg;
    
}

var avg = averageGrade(studentList);

function studentClosestToAvg(studentList){
    var avg = averageGrade(studentList);
    var min = avg;
    for(let index = 0; index < studentList.length; index ++){
        const student = studentList[index];
        var diff = Math.abs(student.grade - avg);
        if (diff<min){
            min = diff;
            closestStudent = student;
        }
    }
    return closestStudent;
}

var test = studentClosestToAvg(studentList);
console.log(test);

function negativas (studentList){
    var negativas = 0;
    for(var i = 0; i < studentList.length; i++){
        if (studentList.grade[i]<=9){
            negativas += 1
        }
    }
    return negativas;
}

function positivas (studentList){
    var positivas = 0;
    for(var i = 0; i < studentList.length; i++){
        if (studentList.grade[i]>=10){
            positivas += 1
        }
    }
    return positivas;
}


var negativas = negativas(studentList);
console.log(negativas);

var positivas = positivas(studentList);
console.log(positivas);