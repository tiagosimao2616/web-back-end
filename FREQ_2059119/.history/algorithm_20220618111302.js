array = [
  [9, 5],
  [1, 4],
  [5, 3],
  [7, 2],
  [2, 2],
];
function algotithm(array) {
  devolve = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      var soma = 0;
      soma += array[i][j];
      if (soma % 2 == 0) {
        devolve.push(soma);
      }
    }
  }
  devolve.sort();
  console.log(array);
}

algotithm(array);
