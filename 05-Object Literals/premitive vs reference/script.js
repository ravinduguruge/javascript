// cerate 2 variables and second variable equal to fisrst variable
let num1 = 10;
let num2 = num1;

// update num1 variable
num1 = 86;

// print variable
console.log(num1);
console.log(num2);

// print that two variable and update only num1 variable 
// that is primitive datatypes

// then create a 2 Objects and second object equal to fisrst object
let obj1 = {
    name :"ravindu",
    age : 23,
    school : "SJNC",
}
let obj2 = obj1;
// next update to obj1 one key value 
obj1.age = 16;

// then print 2 object 
console.log(obj1);
console.log(obj2);

// then create a thrid object and equal to obj2
obj3 = obj2;
// then change the key value of obj2 and print it 
obj2.age = 18;
console.log(obj3);
console.log(obj2);

// and this is reference data type 
// that is change the one object value are should be change and another objects to equal it 
