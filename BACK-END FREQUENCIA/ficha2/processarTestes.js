
listaAlunos = []

function criarAlunosAleatorios(nomeAluno){ //factory
    nota = Math.floor(Math.random() * 20) + 1
    aluno = {
        nome: nomeAluno,
        notaTeste: nota
    }
    return aluno
}

function imprimenotas(listaAlunos){
    for(x in listaAlunos){
        console.log("////////////////////////////")
        console.log("Posição do aluno: "+x)
        console.log("nome: "+listaAlunos[x].nome)
        console.log("nota: "+listaAlunos[x].notaTeste)
        console.log("////////////////////////////")
    }
}

function melhornota(listaAlunos){
    maior = listaAlunos[0].notaTeste
    for(x in listaAlunos){
        if(maior < listaAlunos[x].notaTeste)
            maior = listaAlunos[x].notaTeste
    }
    console.log("a maior nota foi: "+maior)
    console.log("esta nota foi tirada por:")
    for(x in listaAlunos){
        if(listaAlunos[x].notaTeste == maior)
            console.log(listaAlunos[x].nome)
    }
}

function piornota(listaAlunos){
    menor = listaAlunos[0].notaTeste
    for(x in listaAlunos){
        if(menor > listaAlunos[x].notaTeste)
            menor = listaAlunos[x].notaTeste
    }
    console.log("a menor nota foi: "+menor)
    console.log("esta nota foi tirada por:")
    for(x in listaAlunos){
        if(listaAlunos[x].notaTeste == menor)
            console.log(listaAlunos[x].nome)
    }
}

function notasPositivas(listaAlunos){
    console.log("notas positivas")
    for(x in listaAlunos){
        if(10 <= listaAlunos[x].notaTeste){
            console.log(listaAlunos[x].nome+" : "+listaAlunos[x].notaTeste)
        }
    }
    console.log("////////////////////////////")
}

function notasNegativas(listaAlunos){
    console.log("notas negativas")
    for(x in listaAlunos){
        if(10 > listaAlunos[x].notaTeste){
            console.log(listaAlunos[x].nome+" : "+listaAlunos[x].notaTeste)
        }
    }
    console.log("///////////////////////////")
}

function notaMedia(listaAlunos){
    console.log("notas medias");
    soma = 0;
    media = 0;
    for(x in listaAlunos){
        soma += listaAlunos[x].notaTeste
    }
    media = Math.round(soma/30)
    distancia = 20
    tempdistancia = 0
    notaMediana = 0
    for(x in listaAlunos){
        tempdistancia = Math.abs(listaAlunos[x].notaTeste - media)
        if(tempdistancia < distancia){
            distancia = tempdistancia
            notaMediana = listaAlunos[x].notaTeste
        }
    }
    counterNotasMedianas = 0
    for(x in listaAlunos){
        if(listaAlunos[x].notaTeste == notaMediana){
            console.log(listaAlunos[x].nome+" teve nota media")
            counterNotasMedianas++;
        }
    }
    console.log("a media é: "+media)
    console.log("a nota mediana é: "+notaMediana)
    console.log("a nota mediana foi tirada: "+ counterNotasMedianas +" vezes")
    console.log("///////////////////////////")
}

function criarNovoAluno(nome_value,nota_value){
    aluno = {nome:nome_value,notaTeste:nota_value};
    return aluno 
}

function pesquisarNome(nome_aluno,listaAlunos){
    for(var x = 0; x < listaAlunos.length; x++){
        if(listaAlunos[x].nome == nome_aluno){
            console.log("numero do aluno: "+x)
            console.log("nome do aluno: "+listaAlunos[x].nome)
            console.log("nota do aluno: "+listaAlunos[x].notaTeste)
            return 0
        }
    }
    console.log("Não existe aluno com tal nome")
}


listaNomesAlunos = ["Francisco","Zé","Pedro","Tiago","Veloza","João","Rocha","Fabio","Martim","Ruben","Ivo","José","Rui","Gil","Rodrigues","Henrique","Hemily","Joaquim","Pereira","Luís","Trindade","Telmo","Cruz","Walter","Soprano","Paulie","Cristiano","Ronaldo","Hugo","Silva"]


for(var x = 0; x < 30; x++){
    aluno = criarAlunosAleatorios(listaNomesAlunos[x])
    listaAlunos.push(aluno)
}


while(true){
    console.log("////////////////////////////////////////////////")
    console.log("a. imprime notas")
    console.log("b. Melhor nota")
    console.log("c. pior nota")
    console.log("d. nota média")
    console.log("e. notas negativas")
    console.log("f. notas positivas")
    console.log("j. Criar Aluno")
    console.log("h. eliminar Aluno")
    console.log("i. pesquisar por nome")
    console.log("q. sair")
    console.log("////////////////////////////////////////////////")
    op = prompt("opção desejada")
    switch (op) {
        case "a":
            imprimenotas(listaAlunos);
            continue;
        case "b":
            melhornota(listaAlunos);
            continue;      
        case "c":
            piornota(listaAlunos);
            continue;
        case "d":
            notaMedia(listaAlunos);
            continue;
        case "e":
            notasNegativas(listaAlunos);
            continue;
        case "f":
            notasPositivas(listaAlunos);
            continue;
        case "j":
            nome = prompt("Nome do Aluno")
            nota = prompt("Nota do Aluno")
            aluno = criarNovoAluno(nome,parseInt(nota));
            listaAlunos.push(aluno)
            continue;
        case "h":
            index = prompt("Numero de aluno")
            listaAlunos.splice(parseInt(index),1)
            continue;
        case "i":
            nome = prompt("Nome do Aluno")
            pesquisarNome(nome,listaAlunos)
            continue;
        case "q":
            break;
        default:
            continue;
    }
    break
}
