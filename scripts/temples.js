
let lastmodify = document.lastModified;
let ModifiedElement = document.getElementById("last-modified");
if (ModifiedElement) {
    ModifiedElement.textContent = `Last Modification: ${lastmodify}`;
}

const hamburgerElement = document.querySelector("#menu");
const navElement = document.querySelector(".navigation");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});
