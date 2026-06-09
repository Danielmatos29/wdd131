const select = document.getElementById("product");

const last_modified = document.querySelector("#lastModified")
const yearSpan = document.querySelector("#currentyear");

const today = new Date();
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

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
  populateProductOptions();
  trackReviewCount();
});

// Populates the select dropdown with product names and IDs
function populateProductOptions() {
  const selectElement = document.getElementById("product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
}

function trackReviewCount() {
  // Check if this page load is a result of a form submission.
  // A common approach is checking a query parameter or just counting every load of review.html
  // Here we increment it assuming 'review.html' is the confirmation landing page.
  
  let reviewCount = localStorage.getItem("reviewsCompleted");

  // If it doesn't exist yet, initialize it to 0
  if (reviewCount === null) {
    reviewCount = 0;
  } else {
    // Parse the string back to a number
    reviewCount = parseInt(reviewCount);
  }

  reviewCount += 1;

  // Save the updated count back to localStorage
  localStorage.setItem("reviewsCompleted", reviewCount);
};

last_modified.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
