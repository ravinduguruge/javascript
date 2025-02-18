// adding one value to the elements in an array separately ****************

// add assingment marks
const networkMarks = [
    {name:"A", pprMark:23, assingmentMark:56},
    {name:"B", pprMark:58, assingmentMark:56},
    {name:"C", pprMark:32, assingmentMark:56},
    {name:"D", pprMark:78, assingmentMark:56},
    {name:"E", pprMark:12, assingmentMark:56},
];

const addAsignmentMarks = networkMarks.map(mark => {
    if(mark.pprMark >= 40){
        // marks * 60%
        let result = mark.pprMark * 0.6;
        // add assingmentMark * 40% for marks 
        let finalResult = result + mark.assingmentMark * 0.4;
        // return finalResult;
        if(finalResult >= 90){
            return "A+";
        }
        if(finalResult >= 85){
            return "A";
        }
        if(finalResult >= 80){
            return "A-";
        }
        if(finalResult >= 75){
            return "B+";  
        }
        if(finalResult >= 70){
            return "B";
        }
        if(finalResult >= 65){
            return "B-";
        }
        if(finalResult >= 60){
            return "C+";
        }
        if(finalResult >= 55){
            return "C";
        }
        if(finalResult >= 45){
            return "C-";
        }
    }else{
        return "try again!";
    }
});

console.log(addAsignmentMarks)