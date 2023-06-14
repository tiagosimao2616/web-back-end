var utils = require("./arrayUtils.js");

console.log(utils.isEmpty([23]));
console.log(utils.maxArray([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6]));
console.log(utils.minArray([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6]));
console.log(utils.mediaArray([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6]));
console.log(utils.indiceOf([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6],6));
console.log(utils.indiceOfPrimeraOcurrencia([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6],6));
console.log(utils.subArray([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6],5,10));
console.log(utils.isSameLength([1,2,4],[23,52,3]));
console.log(utils.reverse([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6]));
console.log(utils.swap([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6],4,0));
console.log(utils.contains([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6],1));
console.log(utils.contains([1,2,4,6,3,6,1,3,67,1,3,6,3,5,4,1,543,35,6],1709320740401));
console.log(utils.concatena([1,2,4,6,3,6,1,3],[1234,12,3,4,12,5]));