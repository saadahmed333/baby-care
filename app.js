
let toggle = document.getElementById("toggle");
let sideBar = document.getElementById("side-bar"); 
let cross = document.getElementById("cross");

toggle.addEventListener("click", () => {
    sideBar.style.left = "0px"
})
cross.addEventListener("click", () => {
    sideBar.style.left = "-700px"
})