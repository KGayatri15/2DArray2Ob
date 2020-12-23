var input = [
    ["ehhid", "d", "parent", "entity", "typeOf", "path", "question", "answer"],
    [16, 1, "maths", "q2", "Object", ".entity.quiz.maths", "12 - 8 = ?", "4"],
    [17, 2, "q2", "options", "Array", ".entity.quiz.maths.q2"],
    [18, 3, "options", "1", "String", ".entity.quiz.maths.q2.options"],
    [19, 3, "options", "2", "String", ".entity.quiz.maths.q2.options"],
    [20, 3, "options", "3", "String", ".entity.quiz.maths.q2.options"],
    [21, 3, "options", "4", "String", ".entity.quiz.maths.q2.options"]
];
var Rinput = [
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

function start2(){
   
    Array2Obj(Rinput);
 }
var x = {
  abc:{
     def:{jkl:{}},
     ghi:{}
  },
}
function getChildren(x){
  console.log(x.abc);
  var a = JSON.parse("x.abc");
  console.log(a);
  
}  
function start1(){
   getChildren(x);
}
function Array2Obj(input){
    let value = {};
    base = input[0];
    for(i = input.length - 1;i >= 1;i--){   
        for(j = i -1;j >= 0;j--){
            child = input[i];
            parent = input[j];
            if (parent[3] === child[2] && parent[1] + 1 === child[1]) {
                console.log(parent[3]+": " + child[3]);
                if(parent[4] === "Object"){
                    if(parent[6] !== undefined && parent[7] !== undefined){
                        value[base[6]] = parent[6];
                        value[base[7]] = parent[7];
                        obj = value;
                        value = {};
                        value[parent[3]] = obj;
                    }else{
                        obj = value;
                        value = {};
                        value[parent[3]] = obj;    
                     }
                }else if(parent[4] == "Array"){
                    if(value.hasOwnProperty(parent[3])){
                        value[parent[3]].unshift(child[3]);
                        console.log(value[parent[3]]);
                    }else{
                        value[parent[3]] = [child[3]];
                        console.log(value[parent[3]]);
                    }
                }else if(parent[4]== "String"){
                    value[parent[2]].parent[3] = child[3];
                    console.log(value[parent[3]]);
                }
                break;
            }
        }
    }
    console.log(value);
}

