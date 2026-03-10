console.log("9th of march");
// 1. Write a function to print a greeting message.

function greeting(){
    console.log("Happy new year");
}
greeting()

// 2. Write a function that takes a name as a parameter and prints ?

function user(name){
    console.log("Hello",name)
}
user("ram");

// 3. Write a function that takes two numbers and returns their sum.

function sum(a,b){
    x=a+b;
    console.log("sum of two number:",x);
}
sum(4,7);

// 4. Write a function that returns the square of a number.

function sqr(num){
    a=num**2;
    console.log("square of a number:",a)
}
sqr(7);
// 5. Write a function to find the largest of two numbers.

function largestno(x,y){
    if(x>y){
        console.log("largest no is:",x)
    }else{
        console.log("largest no is:",y)
    }
}
largestno(5,6)

// 6. Write a function that returns the factorial of a number.

function fac(num){
    let a=1
    for(let i=1;i<=num;i++){
        a*=i;
    }
    console.log("factorial of a number:",a)
}
fac(5)
// 7. Write a function that returns the reverse of a string.

// function rev(str){
//     let revstring=" "
//     for(let i=str.length-1;i>=0;i++){
//         revstring+=str[i]
//     }
//     console.log("reverse string is:",)
// }
// rev("word")
// 8. Write a function that checks if a string is a palindrome.