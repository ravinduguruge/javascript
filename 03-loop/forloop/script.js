let names = ["ravindu","kavindu","pasindu","sumudu"];

// normal for loop
for(let count = 0; count < 5;count++){
    console.log("hello")
}

console.log("")

// get arrray element print in for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} 

console.log("")

// used OF key word access in array value 
for(let name of names){
    console.log(name)
}

console.log("")

// used IN key word access in array indexes 
for(let name in names ){
    console.log(name)
}
console.log("")

// this is variable character access in of key word 
let username = "ravindu";
for(let i of username){
    console.log(i)
}