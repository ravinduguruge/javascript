const link = document.querySelector('.abc');
// this is get access to attribute  
// console.log(link.getAttribute('attribute name'));
console.log(link.getAttribute(`href`));

// this is set the new value in attribute 
// link.setAttribute(`attribute name`,`value`);
// then now print it 
// console.log(link.getAttribute('attribute name'));
link.setAttribute(`href`,`www.exampleABC.com`);
console.log(link.getAttribute('href'));

// insert the new attribute 
link.setAttribute(`target`,`_blank`);
console.log(link.getAttribute('target'));

link.setAttribute(`class`,`abcNew`);


// this is set the attribute overwrite 
const activeClasses = document.querySelectorAll(`.active`);
console.log(activeClasses)
activeClasses.forEach(active => {
    active.setAttribute(`class`,`activeHighlight`);
});
