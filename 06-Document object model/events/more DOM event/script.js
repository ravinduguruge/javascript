const List = document.querySelector("ul");

const clickAlert = (event) => {
    alert("click on Student Name");
}
const copyAlert = (event) => {
    alert("copy on Student Name");
}
List.addEventListener("copy",copyAlert);
List.addEventListener("click",clickAlert);



const mouseMove = (event) => {
    console.log(event)
}
const body = document.querySelector("body")
body.addEventListener("mousemove", mouseMove);

