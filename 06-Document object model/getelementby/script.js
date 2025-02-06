// one Id selector
let selectorId = document.getElementById("h2-paragraph");
console.log(selectorId);

//select both classess
// cant access foreach method this 
// beacause this is HTMLCollection 
let selectorClassName = document.getElementsByClassName("active");
console.log(selectorClassName);

// select both tag names
let selectTags = document.getElementsByTagName("p");
console.log(selectTags);