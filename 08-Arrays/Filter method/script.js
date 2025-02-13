const scienceMarks = [65,45,32,12,78,98,31];
const filterMarks = scienceMarks.filter(mark => {
    let pass = mark >= 40;
    return pass;
})

console.log(filterMarks);

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

const filterStudent = students.filter(student => {
    let englishPass = student.english > 60;
    return englishPass;
});

console.log(filterStudent)