
const lastModified = document.lastModified;
const modifiedElement = document.getElementById("last-modified");

if (modifiedElement) {
const date = new Date(lastModified);
const formattedDate = date.toLocaleDateString();
modifiedElement.textContent = "Last Modified: " + formattedDate;
}

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    // Populate product dropdown dynamically
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Increment review counter on the review page
    if (window.location.pathname.endsWith("review.html")) {
        const counterKey = "reviewCounter";
        let reviewCount = parseInt(localStorage.getItem(counterKey)) || 0;
        reviewCount++;
        localStorage.setItem(counterKey, reviewCount);

        const counterDisplay = document.createElement("p");
        counterDisplay.textContent = `You have submitted ${reviewCount} reviews.`;
        document.body.appendChild(counterDisplay);
    }
});
