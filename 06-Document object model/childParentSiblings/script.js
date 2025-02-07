// this is access to children element in header-nav class 
// cant access to for each loop this 
// but can access to array 

const topNav = document.querySelector(".header-nav");
const topNavArray = Array.from(topNav.children)
topNavArray.forEach(child => {
    console.log(child);
})

// can access the one element children and can used the getElementById

// const headerNav = document.getElementById("sub-heading");
// console.log(headerNav.children)


// access to parent class 
const parentClass = document.querySelector(".first-paragraph");
console.log(parentClass.parentElement);
// this is acces to parent calss into all childern class 
console.log(parentClass.parentElement.children);


// access to sibling calss (next or previous)
const sibllingClass = document.querySelector(".first-paragraph");
console.log(sibllingClass.nextElementSibling);
console.log(sibllingClass.previousElementSibling);
console.log(sibllingClass.previousSibling);
console.log(sibllingClass.previousElementSibling);

