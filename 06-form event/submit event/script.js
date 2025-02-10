// select the registation form 
const form = document.querySelector(".Registation");
// select the show result element 
const showResult = document.querySelector("#showResult");

// set the username, email, password pattern 
// ^ is start $ is end 
// [] is pattern 
// {} is range 
const usernameParttern = /^[A-Za-z]{6,20}$/;
const emailParttern = /^[a-zA-Z0-9]{6,20}@[a-zA-Z]{3,10}.com$/;
const passwordPattern = /^.{8,}$/;

// add submit event for selected form 
form.addEventListener("submit", (event) => {
    // set the event preventDefault 
    // because refresh site click it 
    event.preventDefault();

    // check the pattern is correct
    // given true or false value 
    const userResult = usernameParttern.test(form.username.value);
    const emailResult = emailParttern.test(form.email.value);
    const passwordResult = passwordPattern.test(form.password.value);
    // get the password value 
    const repassword = form.repassword.value;
    const password = form.password.value;

    // check the if condition all patterns are correct 
    if(userResult && emailResult && passwordResult){
        // then check the password matched
        if(password == repassword){
            // set attribute for select result area 
            showResult.setAttribute("class", "showResultSubmit");
            // set text content to print it 
            showResult.textContent = "submit complete!";
            console.log("password Correct!");
        } else{
            // this is check password else aprt 
            showResult.setAttribute("class", "showResultError");
            showResult.textContent = "please enter the correct password here!";
        }  
    }
    // this is pattern check else part 
    else{
        showResult.setAttribute("class", "showResultError");
        showResult.textContent = "try again!";
    }
});


form.username.addEventListener("keyup", (event) => {
    const userResult = usernameParttern.test(event.target.value);
    if(userResult){
        form.username.setAttribute = ("class", "matched");
    }else{
        form.username.setAttribute = ("class", "dismatched");
    }
    console.log(event.target.value)
});

form.email.addEventListener("keyup", (event) => {
    const emailResult = emailParttern.test(event.target.value);
    if(emailResult){
        form.email.setAttribute = ("class", "matched");
    }else{
        form.email.setAttribute = ("class", "dismatched");
    }
});