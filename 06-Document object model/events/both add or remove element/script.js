const studentList = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const newStudent = document.createElement("li");
    newStudent.textContent = "New Student";
    studentList.append(newStudent);
});

studentList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI"){
        event.target.remove();
    }
});

