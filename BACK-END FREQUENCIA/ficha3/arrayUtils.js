var utils = {
    isEmpty: function (lista) {
        return lista.length == 0;
    },
    maxArray: function (lista) {
        if (this.isEmpty(lista))
            return "ARRAY VAZIO";

        max = lista[0];
        for (x in lista) {
            if (lista[x] > max)
                max = lista[x];
        }
        return max;
    },
    minArray: function (lista) {
        if (this.isEmpty(lista))
            return "ARRAY VAZIO";

        min = lista[0];
        for (x in lista) {
            if (lista[x] < min)
                min = lista[x];
        }
        return min;
    },
    mediaArray: function (lista) {
        if (this.isEmpty(lista))
            return "ARRAY VAZIO";

        soma = 0;
        for (x in lista) {
            soma += lista[x]
        }
        return soma / lista.length
    },
    indiceOf: function (lista, numeroProcurado) {
        if (this.isEmpty(lista))
            return "ARRAY VAZIO";

        indices_do_valor = [];
        for (x in lista) {
            if (lista[x] == numeroProcurado)
                indices_do_valor.push(x)
        }
        return indices_do_valor //retorna todos os indices one esse numero existe
    },
    indiceOfPrimeraOcurrencia: function (lista, numeroProcurado) {
        if (this.isEmpty(lista))
            return -1;

        for (x in lista) {
            if (lista[x] == numeroProcurado)
                return x;
        }
        return -1;//retorna todos os indices one esse numero existe
    },
    subArray: function (lista, arrayInicio, arrayFim) {
        if (this.isEmpty(lista))
            return "ARRAY VAZIO";
        if (arrayFim >= lista.length || arrayInicio < 0)
            return "valor de fim ou inicio fora do tamanho do array"
        rSubArray = [];
        for (x = arrayInicio; x <= arrayFim; x++)
            rSubArray.push(lista[x]);
        return rSubArray;
    },
    isSameLength: function (l1, l2) {
        return l1.length == l2.length;
    },
    reverse: function (lista) {
        lista_invert = [];

        for (x = lista.length - 1; x >= 0; x--) {
            lista_invert.push(lista[x]);
        }
        return lista_invert;
    },
    swap: function (lista, index1, index2) {
        variavelTemp = lista[index1];
        lista[index1] = lista[index2];
        lista[index2] = variavelTemp;
        return lista;
    },
    contains: function (lista, valor) {
        return this.indiceOfPrimeraOcurrencia(lista, valor) != -1;
    },
    concatena: function (lista1, lista2) {
        for (x in lista2) {
            lista1.push(lista2[x])
        }
        return lista1;
    }
}
module.exports = utils;