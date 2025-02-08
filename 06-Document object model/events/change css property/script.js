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



