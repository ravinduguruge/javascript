// Adding to the element in an array 

const numbers = [10,20,30,40,50];

const addNumbers = numbers.reduce((total,number) =>{
    total += number;
    return total;
},0);

console.log(addNumbers);

const students = [{
    name : "Ravindu",
    science : 65,
    maths : 45,
    english : 78
    },
    {
    name : "Kavindu",
    science : 52,
    maths : 95,
    english : 32
    },
    {
    name : "Pavindu",
    science : 45,
    maths : 23,
    english : 69
}];

const addScienceMarks = students.reduce((total, student) => {
    total += student.science;
    return total;
 }, 0);

console.log(`All science marks is ${addScienceMarks}`);