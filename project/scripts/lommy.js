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


// order
document.addEventListener("DOMContentLoaded", () => {
    const productDropdown = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const addProductBtn = document.getElementById("add-product");
    const productList = document.getElementById("product-list");
    const totalAmount = document.getElementById("total-amount");

    let total = 0; // Initialize total cost

    // Event listener for adding a product
    addProductBtn.addEventListener("click", () => {
        const selectedOption = productDropdown.options[productDropdown.selectedIndex];
        const productName = selectedOption.text.split(" - ")[0];
        const productPrice = parseFloat(selectedOption.dataset.price);
        const quantity = parseInt(quantityInput.value);

        // Validate the quantity input
        if (quantity > 0) {
            const productTotal = productPrice * quantity;
            total += productTotal;

            // Create a new list item for the added product
            const listItem = document.createElement("li");
            listItem.textContent = `${productName} x ${quantity} = $${productTotal.toFixed(2)}`;
            productList.appendChild(listItem);

            // Update the total cost display
            totalAmount.textContent = total.toFixed(2);

            // Reset quantity input for the next product
            quantityInput.value = "1";
        } else {
            alert("Please enter a valid quantity.");
        }
    });
});
