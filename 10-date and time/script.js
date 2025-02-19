const now = new Date();
const dateTime = document.querySelector(".dateTime");

dateTime.textContent = `${now.toDateString()}`

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth()); //jan is 0
// console.log(now.getDate());
// console.log(now.getDay()); //sun is 0 mon is 1
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

const publishDate = document.querySelector(".publish");

publishDate.addEventListener("submit", event => {
    const date = publishDate.date.value;
    const time = publishDate.time.value;
});



