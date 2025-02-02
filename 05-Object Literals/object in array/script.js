let users = {
    name : "Ravindu",
    email : "ravindu@gmail.com",
    age : 23,
    married : false,
    // this is object in array *****************************************************
    marks : [
        {
            subjectName : "maths",
            mark : 60,
            avg : 6
        },
        {
            subjectName : "science",
            mark : 80,
            avg : 8
        },
        {
            subjectName : "sinhala",
            mark : 65,
            avg : 6.5
        },
        {
            subjectName : "ICT",
            mark : 60,
            avg : 6
        }
    ],
    allMarks(){
         this.marks.forEach(mark => console.log(mark));
         this.marks.forEach(mark => console.log(mark.subjectName));
    }
};

users.allMarks();






// let items =["Bat","ball","bottle","Box"];
// let itemNames = (item,index) => console.log(item,index) ;
// items.forEach(itemNames);