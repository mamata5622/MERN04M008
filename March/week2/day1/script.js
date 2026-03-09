console.log("9th of march");
// function
// types of function 

// =>anonymous function
//   it is func which has no names 
// =>named function 
function fun1(a,str){
    console.log(`this is ${str}`,a);
}

fun1(50,"shyam");

// let num=prompt("enter any number")
// function even(num=50){
//     if(num%2===0){
//         console.log(num,"is even no");
//     }else{
//         console.log(num"is odd no")
//     }
    
// }

// even();

// expressional func // function as a expression
let fun3 = function () {
    console.log("this is the expression function")
}

fun3();

// =>nested function 
function parent(){
    console.log("this is parent func");
    function child(){
        console.log("this is child func");
        function nextchild(){
            console.log("this is nextchild func");
        }
        nextchild()
    }
    child()
}
parent()


function func5(){
    let a=90;
    console.log(a);
    return a;
}
console.log(func5());

//  =>IIF function
//  =>Arrow function
//  =>Higher order function

