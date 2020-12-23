//["id","parent","d"]
var input = [
    { "i":1,"parent":0,"d":1},
    { "i":2,"parent":1,"d":2},
    { "i":3,"parent":1,"d":2,},
    { "i":4,"parent":2,"d":3,},
    { "i":5,"parent":2,"d":3,},
    { "i":6,"parent":3,"d":3,},
    { "i":7,"parent":5,"d":4,},
];
function getObject (arr ,parent , output){
    for(var j in arr){
       if(arr[j].parent === parent){
          output[arr[j].i] = {};
          getObject(arr , arr[j].i ,output[arr[j].i]);
       }
    }
    return output;
}
function start1(){
  console.log(getObject(input , 0 ,{}));
}

