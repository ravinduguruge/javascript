// function declaration********************************************
function addition(num1, num2){
    return num1 + num2;
}
let result = addition(5,2);
console.log(result); 


// regular function**************************************************
//  can call first method and the declaration method
function intro(){
    console.log("hello world!");
}
intro();


// variable function *************************************************
//  can't be call first variable function
// should be include ; last in variable function 
let intro1 = function(){
    console.log("hellooooooo");
};
intro1();    


// argument and parameter function ************************************

// name is parameter 
function welcome(name){
    console.log(`welcome ${name}`)
}
// ravindu is argument 
welcome("ravindu")

function add(num1, num2){
    let result = num1 + num2;
    console.log(result);
}
add(5,10);

function fullName(firstName, lastName){
    console.log(`welcome ${firstName} ${lastName}`)
}
fullName("ravindu", "guruge");

// return key word in used function *************************************
function sub(num1, num2){
    let result = num1 - num2;
    return result;
}
let value = sub(40, 20);
console.log(value);

// arrow => function******************************************************

let methOne = function(){
    console.log("Welcome");
}
methOne();

// this method declare in =>
let meth1 = () => {
    console.log("welcome arrow")
};
meth1();

// sorthand method declaration
let methShort = () => `Welcome shorthand`;
console.log(methShort());

// shorthand method one parameter
// one parameter used in haven't ()
let methpar = name => `Welcome ${name}`;
console.log(methpar("Ravindu"));

// shorthand method two parameter
let methPar2 = (num1, num2) => num1 + num2;
console.log(methPar2(50,10));


// function method ***************************************************

let welcome1 = () => `helloooo welcom mr.`;
console.log(welcome1());

let myname = "LOWERCASE";
console.log(myname.toLowerCase());

// push is new array length method
let array = ["ravindu", "kavindu"];
console.log(array.push("pasindu"));

// callback function *********************************************************

// function add(a, b){
//     return a+b;
// }
// function mul(a,b){
//    return a*b; 
// }
// function sub(a,b){
//     return a-b; 
//  }

// function cal(num1, num2){
//     let addition = add(num1,num2);
//     let multipication = mul(num1, num2);
//     let substraction = sub(num1, num2);

//     console.log(`addition is : ${addition}`);
//     console.log(`substraction is : ${substraction}`);
//     console.log(`multipication is : ${multipication}`);
// }

// cal(5,10);

let adda = (a,b) =>  a+b;

function cal(num1,num2){
    let addition = adda(num1,num2);
    console.log(addition);
}
cal(2,4)