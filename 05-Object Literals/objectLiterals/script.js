// this is the object create *************************************
let user = {
    name: "Ravindu",
    email:"ravinduguruge@gmail.com",
    Dob: "2001/11/14",
    address: "Kegalle",
    age:25,
    isLoggedIn: false,
    // this is the method ****************************************
    // login: function(){
    //     console.log(`login`);
    // },
    login () {
        // console.log(`login ${name}`);
        return `login`;
    },
    logout(){
        console.log(`Logout`)
    }
   
};


console.log(user);
console.log(typeof user );

let key = "email";
console.log(user[key]);

// user.login();
console.log(user.login())
user.logout();