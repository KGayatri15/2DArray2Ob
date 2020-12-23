//["id","parent","d"]
//["ehhid", "d", "parent"]
var input = [
  [ 1,0,1],
  [2,1,2],
  [3,1,2],
  [4,2,3],
  [5,2,3],
  [6,3,3],
  [7,5,4],
  [8,1,2]
];
function getObject (arr ,parent,output){
  for(var j in arr){
    if(arr[j][1] === parent){
       output[arr[j][0]] = {};
       getObject(arr,arr[j][0],output[arr[j][0]]);
    }
  }
  return output;
}
function start1(){
  console.log(getObject(input , 0 ,{}));
}

