// let numbers = [15,23,4,57,95,18,58];
// numbers.sort();
// console.log(numbers);

let numbers = [15,23,4,57,95,18,58,1 ];

// get a, b variable to first element and next element in an array 
// then return a-b
// if answer will be negative number should be sort these 2 number in an array 

numbers.sort((a, b) => {
    return a-b;
});
numbers.reverse();
console.log(numbers)
