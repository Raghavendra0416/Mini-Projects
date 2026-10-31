import { products } from "./data/products.js";
import { searchByProducts, filterByCategory, sortByProducts } from "./domain/productQueries.js";
import { renderProducts } from "./ui/renderProducts.js"

//---------------------------------------------
// Render Filter drop options
const filterSelect = document.querySelector("#filter");
const categories = [...new Set(products.map((p) => p.category))];

filterSelect.replaceChildren(
    new Option("All Categories", "all"), //<--Creates a new HTML <option> element
    ...categories.map((category) => new Option(category, category))
);

// filterSelect.innerHTML = categories
//     .map((c) => `<option value="${c}">${c}</option>`)
//     .join("");

//--------------------------------------------

// Get DOM elements
const myForm = document.querySelector("form");

// Main function to handle search, filter and sort
function updateProducts() {
    // Get user input
    const formData = new FormData(myForm);

    const searchQuery = formData.get("search");
    const category = formData.get("filter");
    const sortKey = formData.get("sort");

    // Start with the original products
    let result = products;

    // 1. Search
    result = searchByProducts(result, searchQuery);

    // 2. Filter
    result = filterByCategory(result, category);

    // 3. Sort
    result = sortByProducts(result, sortKey);

    // Render final results
    renderProducts(result);
}

myForm.addEventListener("input", updateProducts);

// Initial rendering
updateProducts();
