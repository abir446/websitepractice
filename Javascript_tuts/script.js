//JS CONSOLE API(APPLICATION PROGRAMMING INTERFACE)
// console.log("Hello World");
// alert("Hello from the other side");
document.write("Writing via JS");
// console.warn("You have been hacked");
// console.error("ERROR 404");
// console.log("Who are you??");

//JS Variables::
var num = 34;
var num2 = 35;
// console.log(num+num2);

//Datatypes::
var str1 = "This is a string";
var str1 = "This is also a string";
var num1 = 2424;
// console.log(num1);
var num2 = 34;

//Objects
var marks = {
    ravi: 34,
    abir: 74,
    das: 20
}
// console.log(marks);

//bools
var a = true;
var b = false;
// console.log(a);

//undefined and null
var und;
// console.log(und);

var n = null;
// console.log(n)

// Primtive data types: numbers,string,undefined, null ,symbol
// Reference data type: Arrays and Objects

var Arr = [1, 2, "Abir", 3, 4, 5];
// console.log(Arr);

// Operators:
//arithmatic
var a = 100;
var b = 10;
// console.log("The value of a+b: ",a+b);
// console.log("The value of a-b: ",a-b);
// console.log("The value of a*b: ",a*b);
// console.log("The value of a/b: ",a/b);

// Assignment Operators

var c = b;
c += 2;
// console.log(c)

//Comparison

var x = 20
var y = 30
// console.log(x==y)
// console.log(x<=y)

// Logical Operators

// console.log(true && true)

//FUNCTIONS IN JAVASCRIPT

function avg(a, b) {
    return (a + b) / 2;
}
c = avg(4, 6)
// console.log(c); 

// Conditional statements in JS
var age = 112;
//Single if statement
// if (age>18){
//     console.log("Eligible")
// }

// if (age>18){
//     console.log("You are not a kid");
// }
// else{
//     console.log("You are a kid!")
// }

if (age > 2) {
    // console.log("You are not a ")
}

// Loops in JS
var ar = [1, 2, 34, 324];
// for (var i=0;i<ar.length;i++){
//     console.log(ar[i])
// } 

// ar.forEach(function(element){
//     console.log(element);
// })

const ab = 0;
// ab+=1;

// while loop
// let j = 0;
// while (j<ar.length){
//     console.log(ar[j])
//     j++;
// }

//array methods
// let myar=["fan","Camera",34,true,null];
// console.log(myar.    length)
// myar.pop();
// console.log(myar.length)
// myar.push("Array")
// myar.shift();
// myar.unshift("Abir");
// myar.sort();
// console.log(myar)
// let ja=[4,2,532,21,54];
// console.log(ja.sort());

// mydate= new Date();
// console.log(mydate);






// DOM Manipulation

let ele=document.getElementById('click');
console.log(ele)

let el1=document.getElementsByClassName('container');
console.log(el1);
el1[0].style.background="yellow";
el1[1].classList.add("bg-primary");
el1[1].classList.add("text");