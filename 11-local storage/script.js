// set localStorage item 
localStorage.setItem("name","Ravindu");
localStorage.setItem("grade", "12");

// access to localStorage item 
const name = localStorage.getItem("name");
const grade = localStorage.getItem("grade")

console.log(name,grade);

// update localStorage 
localStorage.grade = 13;

// remove item 
localStorage.removeItem("name");

// clear item 
localStorage.clear();