// user click the button and then change the style 
const addStudent = document.querySelector("button");
console.log(addEventListener)

// change the css property in button 
addStudent.addEventListener("click",(event) => {
    event.target.style.backgroundColor = "#234852"
    event.target.style.color = "#fff"
    console.log("mouse down!");
});

// change the css property 
// first select what  change the element 
const students = document.querySelectorAll("li");
students.forEach(student => {
    student.addEventListener("click",(event) => {
        event.target.style.backgroundColor = "#568342"
        event.target.style.color = "#fff"
        // event.target.style.fontWight = "bold"
        console.log(event.target.style)
    });
});




// remove element 
// before select the li tag 
// but run this function
// beacause last function is run this 
// const students = document.querySelectorAll("li");
// students.forEach(student => {
//     student.addEventListener("click",(event) => {
//         event.target.remove();
//         console.log(event.target.textContent)
//     });
// });


// addelement
// const stuList = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     stuList.innerHTML += "<li>New Student</li>";
//     console.log(stuList.innerHTML);
// });