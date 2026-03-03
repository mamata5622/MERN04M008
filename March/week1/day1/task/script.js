console.log("2nd of march");
// question1.Print numbers from 1 to 100 using a for loop
for(let i=1;i<=100;i++){
    console.log("i");
}

// question2. Print numbers from 1 to 100 using a for loop
let n=10;
let sum=n*(n+1)/2;
console.log("sum of 1 to 10 is",sum)

// OR 

let sum1=0;
for(let i=1;i<=10;i++){
    sum1=sum1+i
}
console.log("sum of 1 - 10 is",sum1)

// question3. Print multiplication table of 7.
let num=0
for(let i=1;i<=10;i++){
    console.log(7*i)
}

// question4. Find the factorial of a number.
let x=6
let fac=1;
for(let i=1;i<=x;i++){
    fac=fac*i;
    console.log("factorial no:",fac)
}


// question5. Reverse an array using loop. 
let arr=[0,1,2,3,4,5]
for(let i=arr.length;i>=0;i--){
    console.log(i)
}

    

