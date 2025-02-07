// add class 
const xyz = document.querySelector(".xyz");
xyz.classList.add("xyzBckgrnd");
// remove class 
xyz.classList.remove("xyz");

// this is both select add or remove class 
const activeClasses = document.querySelectorAll(".active");
const inactiveClasses = document.querySelectorAll(".inactive");

activeClasses.forEach(active => {
    active.classList.add("inactive");
    active.classList.remove("active");
});

inactiveClasses.forEach(inactive => {
    inactive.classList.add("active");
    inactive.classList.remove("inactive");
})


// this is all are the active classes
// because this function running with all classes are updated inactive classes 

// const inactiveClasses = document.querySelectorAll(".inactive");
// inactiveClasses.forEach(inactive => {
//     inactive.classList.add("active");
//     inactive.classList.remove("inactive");
// });


//now this is with the id element add the class
//this element add the class default then can't add the class
//omly use the have id with the element
const subHeading = document.querySelector("#sub-heading");
subHeading.classList.toggle("sub-heading");