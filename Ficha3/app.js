var ArrayUtils = require('./ArrayUtils');


function started(){
    console.log("Started Download");
}

function update(){
    for(var i = 0; i <=100; i++)
    console.log(i + "% of Download")
}

function completed(){
    console.log("Download Completed")
}

function performDownload(fn_s,fn_u,fn_c){
    fn_s();
    fn_u();
    fn_c();
}


//performDownload(started,update,completed);

var array = [2,4,1,0];
var array1 = [2,4,1];
 
 
var empty = ArrayUtils.isEmpty(array);
console.log(empty);
//console.log(ArrayUtils.isEmpty(array));

console.log(ArrayUtils.NumberMax(array));

console.log(ArrayUtils.NumberMin(array));

console.log(ArrayUtils.NumberAverage(array));

console.log(ArrayUtils.NumberIndexOf(array, 4));

console.log(ArrayUtils.SubArray(array,0,2));

console.log(ArrayUtils.isSameLength(array,array1));

console.log(ArrayUtils.reverse(array));

console.log(ArrayUtils.swap(array,4,5));

console.log(ArrayUtils.contains(array,9));

console.log(ArrayUtils.concatenate(array,array1));