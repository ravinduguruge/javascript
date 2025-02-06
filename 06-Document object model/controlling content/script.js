let mainHeading = document.querySelector(".main-heading");
// console.log(mainHeading);

// this is changed the content of html 
mainHeading.innerText = "--THIS IS HEADING ONE !--";

let subHeading = document.querySelector("#sub-heading");
// console.log(subHeading)
// this is updated after the text
subHeading.innerText += " --This is updated--";

// this is node list it is can access to foreach method 
let liHead = document.querySelectorAll("ul.header-nav li");
liHead.forEach((element) => {
    console.log(element);
    element.innerText += " **";
});

// this is overwrite text in html 
// this is used to innerHTML
//can overwrite to any tags

let firstParagraph = document.querySelector(".first-paragraph");
firstParagraph.innerHTML = `<h1>--------</h1>`;

