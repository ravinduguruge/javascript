const addForm = document.querySelector(".addItem");
console.log(addForm)
addForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log(addForm.task.value);
})