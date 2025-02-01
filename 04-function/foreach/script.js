let students = ["Ravindu","Pasindu","Kavindu","Tharindu"];

// let names = (student) => {
//     console.log(`My name is ${student}`);
// };
// students.forEach(names);

// This """student""" variable is an access the index of students array 
// we can have any name for this variable 
let names = (student) => console.log(`My name is: ${student}`);
students.forEach(names);
console.log("");

let items =["Bat","ball","bottle","Box"];

let itemNames = (item,index) => console.log(`${index+1} item is: ${item}`);
items.forEach(itemNames);