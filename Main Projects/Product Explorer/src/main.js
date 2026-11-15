import { products } from "./data/products.js";
import { searchByProducts, filterByCategory, sortByProducts } from "./domain/productQueries.js";
import { renderProductList } from "./ui/productList.js";
import { toggleFavourite, isFavourite } from "./domain/favouriteActions.js"
import { syncFavButton } from "./ui/favButton.js"

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
const productsContainer = document.querySelector("#products");

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
    renderProductList(result, productsContainer);
}


//------------------------------
// Handling fav
function handleFav(e) {
    const button = e.target.closest("button[data-action]");
    if (!button) return;

    const id = button.closest("article")?.dataset.productId;
    if (!id) return;

    toggleFavourite(id);
    syncFavButton(button, isFavourite(id));
}

// Event Listners
myForm.addEventListener("input", updateProducts);
productsContainer.addEventListener("click", handleFav);

// Initial rendering
updateProducts();










//--------------------
// In main.js, paint loading, call the API, run the Week 3 query functions, then paint products.
// Retry calls the same load function. Keep the favourite Set and delegated listener from Day 2.
// Create one malformed JSON fixture and one wrong-shape fixture for manual boundary checks.