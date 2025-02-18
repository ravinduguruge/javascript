let numbers = [5,10,2,1,15,78,95,46,32];

// first cheack the code and then condition is true and break the loop 
let findNumbers = numbers.find((number) => {
    return number >= 30;
});

console.log(findNumbers)

const marks = [{name:"ravindu", science:56, maths:78, english:32},
    {name:"kavindu", science:45, maths:56, english:65},
    {name:"pavindu", science:32, maths:26, english:88}];

let findMarks = marks.find((mark) => {
    return mark.english >= 40;
})
console.log(findMarks.english)

