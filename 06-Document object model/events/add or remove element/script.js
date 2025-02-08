
// remove element 
// select all the li tag 
const students = document.querySelectorAll("li");
students.forEach(student => {
    student.addEventListener("click",(event) => {
        event.target.remove();
        console.log(event.target.textContent)
    });
});


// addelement
// select ul tag 
// const stuList = document.querySelector("ul");
// select the button 
// const button = document.querySelector("button");
// button add to add event 
// button.addEventListener("click", () => {
//     stuList.innerHTML += "<li>New Student</li>";
//     console.log(stuList.innerHTML);
// });

// add element 
// select ul tag 
const stuList = document.querySelector("ul");
// select the button 
const button = document.querySelector("button");
// button add to add event 
button.addEventListener("click", () => {
    // create new variable and equal to you need create element 
    const newLi = document.createElement("li");
    // then variable.innerText equal to value 
    newLi.innerText = "New Student";
    // pass the variable to ul 
    // append is after print 
    // prepend is before the print 
    stuList.append(newLi);
    console.log(stuList.innerHTML);
});