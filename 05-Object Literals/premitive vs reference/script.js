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
// **********************************************************************


// create the two array and first array equal to second array
let names1 = ["Ravindu","kavindu","pasindu"];
let names2 = names1;
names1.push("tharindu");

// then print both 2 array 
console.log(names1);
console.log(names2);

// push value is assign the two arrays 
// beacaus array is reference data type 

// now create 2 arrays 
//  then new value push it
let numbers1 = [10,20,30];
let numbers2 = [...numbers1,40,50,60];
numbers1.push(100);

// this equal not assign the both arrays and only this array 
console.log( numbers1);
console.log( numbers2);


