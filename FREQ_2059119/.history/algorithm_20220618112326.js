array = [
  [9, 5],
  [1, 4],
  [5, 3],
  [7, 2],
  [2, 2],
];
function algotithm(array) {
  devolve = [];
  for (let i = 0; i < array.length; i++) {
    let soma = 0;
    for (let j = 0; j < array.length; j++) {
      soma += array[i][j];
      if (soma % 2 == 0) {
        devolve.push(soma);
      }
    }
  }
  devolve.sort(function (a, b) {
    return a - b;
  });
  console.log(devolve);
}

algotithm(array);
