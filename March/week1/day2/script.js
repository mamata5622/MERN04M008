console.log("3rd of march")
let str="Qlith";
console.log(str.length)//5

let no=30;

// inerpolation (backtick)
// we can place any variable inside a template(string) 
console.log('Number &{no}');

// concatenation

let str1="HIEE";
let str2="parth";

console.log(str1 +" "+str2);
console.log(str1+20);
console.log("1"+3)

// + operator (normal addition, concatenation, type casting)

console.log(+"5" +6)

console.log(str2.toUpperCase());
console.log(str1.toLowerCase());

let str3=" hiee ";
console.log(str3.length);
// console.log(str3.trim().length);
console.log(str3.trimStart().length);

let str4="Qlith innovation";
console.log("str4");
console.log(str4.slice(0,5))
console.log(str4.slice(4))
console.log(str4.slice(-5))
console.log(str4.slice(4,4))

// the starting index < ending index  

console.log(str1.concat(str3));
console.log(str4.replace("Q","B"));
console.log(str4.replaceAll("n","N"));

console.log(str4.at(2));
console.log(str4.charAt(3));
console.log(str4[0]);

// let str5="@"
// let fullname=prompt("enter your name")
// console.log(str5.concat(fullname))
// console.log(fullname.length)
// console.log("@"+fullname+fullname.length);

console.log(str4.split(""))


