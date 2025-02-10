const result = ["A","A","A","A","A"];
const form = document.querySelector(".quiz-form");
const showResult =document.querySelector(".showResult")
const answers = document.querySelectorAll(".question")
const buttonHide = document.querySelector(".submit")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,]
    userAnswers.forEach((answer, index) => {
        if(answer === result[index]){
            score += 1;
            answers[index].classList.add("correct");
        }else{
            answers[index].classList.add("incorrect");
            
        }
    });
    if(score === 5){
        showResult.querySelector(".resultButton").textContent = `Complete!!!`;
        showResult.querySelector(".resultButton").style.backgroundColor = "#38fa55";
        showResult.querySelector(".resultButton").style.color = "#000";
    }
    console.log(score);

    scrollTo(0,0)
    showResult.classList.remove("hide");
    buttonHide.classList.add("hide");
    showResult.querySelector(".result").textContent = `Your Result is ${score}/5`;

});

