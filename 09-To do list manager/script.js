// select add item form 
const addForm = document.querySelector(".addItem");
// select ul tag 
const tasks = document.querySelector(".tasks");
// select clear massage button
const clearAll = document.querySelector(".clearMsg");
// select massage span 
const massageSpan = document.querySelector(".messageBox span")
const searchbox = document.querySelector(".search");


// function updateTasks(){
//     const tasksLength = tasks.children.length;
//     console.log(tasksLength);
//     massageSpan.textContent = `You have ${tasksLength} Tasks`;
// }

// item count ***********************************************************************************************
const updateTasks = () => {
    const tasksLength = tasks.children.length;
    console.log(tasksLength);
    massageSpan.textContent = `You have ${tasksLength} Tasks`;
}



// set the eventlistener to submit button 
addForm.addEventListener("submit", event => {
    // set the event preventDefault 
    event.preventDefault();
    // get the user enter value as trim the spaces 
    const result = addForm.task.value.trim();

    if(result.length){
        tasks.innerHTML += `<li>
                <span>${result}</span>
                <i class="bi bi-trash3 delete"></i>
              </li>`;
        addForm.reset();
        updateTasks();
    }
    
});

// remove item one by one 
tasks.addEventListener("click", event => {
    console.log(event.target)
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
        updateTasks();

    }
});

// clear all tasks 
clearAll.addEventListener("click", event => {
    const taskItems = tasks.querySelectorAll("li");
    taskItems.forEach(item => {
        item.remove();
        updateTasks();

    });
});



// search item 
// get the user search the value 
const searchTasks = (word) => {
    // and then into the array to it 
    Array.from(tasks.children)
    // filter the !search item 
    .filter(task => {
        return !task.textContent.includes(word);
    })
    // and add the hide class from the !search item 
    .forEach(task => {
        task.classList.add("hide")
    });

    // then return all  value 
    Array.from(tasks.children)
    .filter(task => {
        return task.textContent.includes(word);
    })
    .forEach(task => {
        task.classList.remove("hide")
    });

}

// search item keyup event 
searchbox.addEventListener("keyup", event => {
    const word = searchbox.task.value.trim();
    searchTasks(word);
});

// clear the all click the clear button 
searchbox.addEventListener("click", event => {
    if(event.target.classList.contains("close")){
        searchbox.reset();
        const word = searchbox.task.value.trim();
        searchTasks(word);
    }
})