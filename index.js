var input = [
  ["ehhid", "d", "parent", "entity", "typeOf", "path", "question", "answer"],
  [1, 1, "entity", "quiz", "Object", ".entity"],
  [2, 2, "quiz", "sport", "Object", ".entity.quiz"],
  [3, 3, "sport", "q1", "Object", ".entity.quiz.sport", "Which one is correct team name in NBA?", "Huston Rocket"],
  [4, 4, "q1", "options", "Array", ".entity.quiz.sport.q1"],
  [5, 5, "options", "New York Bulls", "String", ".entity.quiz.sport.q1.options"],
  [6, 5, "options", "Los Angeles Kings", "String", ".entity.quiz.sport.q1.options"],
  [7, 5, "options", "Golden State Warriros", "String", ".entity.quiz.sport.q1.options"],
  [8, 5, "options", "Huston Rocket", "String", ".entity.quiz.sport.q1.options"],
  [9, 2, "quiz", "maths", "Object", ".entity.quiz"],
  [10, 3, "maths", "q1", "Object", ".entity.quiz.maths", "5 + 7 = ?", "12"],
  [11, 4, "q1", "options", "Array", ".entity.quiz.maths.q1"],
  [12, 5, "options", "10", "String", ".entity.quiz.maths.q1.options"],
  [13, 5, "options", "11", "String", ".entity.quiz.maths.q1.options"],
  [14, 5, "options", "12", "String", ".entity.quiz.maths.q1.options"],
  [15, 5, "options", "13", "String", ".entity.quiz.maths.q1.options"],
  [16, 3, "maths", "q2", "Object", ".entity.quiz.maths", "12 - 8 = ?", "4"],
  [17, 4, "q2", "options", "Array", ".entity.quiz.maths.q2"],
  [18, 5, "options", "1", "String", ".entity.quiz.maths.q2.options"],
  [19, 5, "options", "2", "String", ".entity.quiz.maths.q2.options"],
  [20, 5, "options", "3", "String", ".entity.quiz.maths.q2.options"],
  [21, 5, "options", "4", "String", ".entity.quiz.maths.q2.options"]
];
function getObject (arr ,parent,output){
  for(var j in arr){
    if(arr[j][2] === parent[3]&& arr[j][5].includes(parent[5]) && arr[j][1] === 1+ parent[1]){   
      if(parent[4] === "Array" && arr[j][4] === "String"){
        output.unshift(arr[j][3]);
      }else if(arr[j][4] === "Object"){
        output[arr[j][3]] = {};
        if(arr[j].length > 6){
          output[arr[j][3]][arr[0][6]] = arr[j][6];
          output[arr[j][3]][arr[0][7]] = arr[j][7];
        }
      }else if(arr[j][4] === "Array"){
        output[arr[j][3]] = [];
      }
      getObject(arr,arr[j],output[arr[j][3]]);
    }
     
  }
  var object = {};
  object[arr[1][3]] = output;
  return object;
}
function start1(){
  console.log("From getObject() ");
  console.log(getObject(input,input[1],{}));
}
