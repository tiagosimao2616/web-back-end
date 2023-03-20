module.exports = {
    isEmpty: function(array){
        if (array.length==0){
            return true;
        }
        else{ 
            return false;
        }
    },
    NumberMax: function(array){
        var m = array[0];
    for(var i=0; i<array.length; i++){
        if(array[i] > m)
        m = array[i];
    }
    return m;    
    },
    NumberMin: function(array){
        var m = array[0];
    for(var i=0; i<array.length; i++){
        if(array[i] < m)
        m = array[i];
    }
    return m;    
    },
    NumberAverage: function(array){
            var sum = 0;
            for(var i=0; i<array.length; i++){
                sum += array[i];
            }
            var avg = sum/array.length;
            return avg;
    },
    NumberIndexOf: function(array,elemento){
        for(var i = 0; i<array.length; i ++){
            if (array[i]==elemento){
                return i;
            }
        }
        return -1;
    },
    SubArray: function(array,startIndex,endIndex){
        var subarray = [];
        for(var i = startIndex; i <= endIndex; i++){
            subarray.push(array[i])
        }
        return subarray;
    },
    isSameLength: function(array,array1){
        if (array.length == array1.length){
            return true;
        }
        else{
            return false;
        }
    },
    reverse: function(array){
            array.reverse();
            return array
    },
    swap: function(array,index1,index2){
        for(var i = 0; i<array.length; i++){
            if (array[i]==index1){
                array[i]=index2;
            }
        }
        return array;
    },
    contains: function(array,value){
        if(this.NumberIndexOf(array,value)!=-1){
            return true;
        }
        else {
            return false;
        }

    },
    concatenate: function(array,array1){
        var array_saida = [];
            array_saida.push(array);
            array_saida.push(array1);
        return array_saida;
    }

        
};


