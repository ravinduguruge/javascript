// this is selector is only one tag selector
// cant create foreach methood 
let discription = document.querySelector('p');
console.log(discription);
// class name : .classname 
// Id name : #Idname
// or 
// inspec > selectelement > right click > copy > copy selecter > paste



// can used create foreach methood 
// this is select multiple items 
let descriptionNew = document.querySelectorAll('p');
console.log(descriptionNew);
console.log(descriptionNew.forEach(element => console.log(element)))