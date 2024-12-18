const lastModified = document.lastModified;
const modifiedElement = document.getElementById("last-modified");

if (modifiedElement) {
const date = new Date(lastModified);
const formattedDate = date.toLocaleDateString();
modifiedElement.textContent = "Last Modified: " + formattedDate;
}