console.log("hello");
 let str="qlith innovation";//iterable statement
 for(let v of str){
    console.log(v)
 }

 let arr=[1,2,3,4,5];
 for(let v of arr){

 }

//  string 
// how to reverse a string(way1) 
let reversestring="";
for(let i=str.length-1;i>=0;i--){
    reversestring+=str[i]
}
console.log(reversestring);
// way2 
// let arrString=str.split("");
// console.log(arrString);

// let reverseArr=arrString.reverse();
// console.log(reverseArr);

// let reverseStr=str.split("").reverse().join("");
// console.log(reverseStr);

let revStr=str.split("").reverse().join("");
console.log(revStr);

let jsStr = "I love JavaScript";
let jsStrArr = jsStr.split(" ");
console.log(jsStrArr)

let revJsString = jsStrArr.reverse().join(" ");
console.log(revJsString)

// way 1
let countVowel = 0;
let lowerCase=jsStr.toLowerCase();

for(let v of lowerCase){
    if(v === "a" || v==="e" || v==="i" || v==="o" || v==="u"){
        countVowel++;
    }
}

console.log(countVowel);

// way 2
let vowels="aeiou";
let countVol=0
for(let v of lowerCase){
    if(vowels.includes(v)) countVol++;
}
console.log(countVol)

let numArr=new Array(5);
numArr.fill(0);
console.log(numArr);

let numArr1=[1,2,9,4,5,8,7];
// console.log(numArr.sort());
console.log("after sorted",numArr.toSorted())

console.log(numArr.toReversed());
console.log(numArr.toSpliced());

// Math obejct
console.log(Math.PI)
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);

console.log(Math.max(2,3,9));
console.log(Math.min(6,8))
console.log(Math.sqrt(5))
console.log(Math.pow(2,3)) //2^3

console.log(Math.floor(6));
console.log(Math.ceil(9.1));

console.log(Math.round(4.4));
console.log(Math.trunc(44.789789687));
console.log(Math.cbrt(8));
console.log(Math.random(9))

console.log(Math.abs(-5))
console.log(Math.sign(-7))  // -1 * 7




