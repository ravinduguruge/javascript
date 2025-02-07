const addStudent = document.querySelector("button");
// console.log(addEventListener)

addStudent.addEventListener("click",(event) => {
    event.target.style.backgroundColor = "#565656"
    console.log("mouse down!");
});

const students = document.querySelectorAll("li");
students.forEach(student => {
    student.addEventListener("click",(event) => {
        event.target.style.backgroundColor = "#568342"
        console.log(event.target.style.backgroundColor)
    });
});