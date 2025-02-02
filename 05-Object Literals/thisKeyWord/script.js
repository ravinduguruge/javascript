let user = {
    name: "Ravindu",
    email: "ravinduguruge@gmail.com",
    Dob: "2001.11.14",
    age: 23,
    isLoggedIn: false,
    login(){
        this.isLoggedIn = true;
        return `${this.name} Login`;
    },
    logout(){
        this.isLoggedIn = false;
        return `${this.name} logout `;
    }
}

console.log(user)
console.log(user.login())
console.log(user.logout())