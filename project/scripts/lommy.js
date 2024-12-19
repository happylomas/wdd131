const lastModified = document.lastModified;
const modifiedElement = document.getElementById("last-modified");

if (modifiedElement) {
const date = new Date(lastModified);
const formattedDate = date.toLocaleDateString();
modifiedElement.textContent = "Last Modified: " + formattedDate;
}




// Hamburger Menu Toggle
// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const navLinks = document.querySelector('.nav-links');

// hamburgerMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// Hero Buttons Interactions
const membershipBtn = document.getElementById('membership-btn');
const orderBtn = document.getElementById('order-btn');

membershipBtn.addEventListener('click', () => {
    alert('Redirecting to Membership Registration!');
    window.location.href = 'membership.html'; 
});

orderBtn.addEventListener('click', () => {
    alert('Redirecting to Product Order!');
    window.location.href = 'products.html'; 
});
