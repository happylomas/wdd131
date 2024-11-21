let lastmodify = document.lastModified;
let ModifiedElement = document.querySelector(".last-modified");
if (ModifiedElement) {
    ModifiedElement.textContent = `Last Modification: ${lastmodify}`

}
