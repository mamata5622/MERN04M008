console.log("Hello, its 3rd day of march")
// question1 Reverse the order of words in a sentence.
let sen="reverse the word";
let words=sen.split('');

console.log(words)

// question2  Find the length of a string without using .length.
let x="abcde";
let y=x.split('');

console.log(y)
// question3 Print each character of a string using a loop.
let str="JavaScript";
for(let i=0;i<=str.length;i++){
    console.log(str[i]);
}

// question4 Count the number of vowels in a string.
let str1="hello world";
let vowels="aeiouAEIOU";
let count=0
for(let char of str1){
    // if(vowels.includes(char)){
    //     count++
    // }
}
console.log("Number of vowels:",count)

// question5 Count how many spaces are present in a string.



// question6 Convert all characters of a string to uppercase.
let str2="mamta";
console.log(str2.toUpperCase())

// question7 Convert all characters of a string to lowercase.
// let str="BEHERA"
console.log(str2.toLowerCase())

// question8 Extract the first 5 characters from a string
let str3="hello ram"
console.log(str3.slice(0,5))


// question9 Remove all spaces from a string.
let str4="  shyam "
console.log(str4.trim())

// question10 Convert a string into an array of characters.
let str5="string";
let array=str5.split('')
console.log(array)

