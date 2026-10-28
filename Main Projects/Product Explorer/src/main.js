import { products } from "./data/products.js";
import { searchByProducts, filterByCategory, sortByProducts } from "./domain/productQueries.js";
import { renderProducts } from "./ui/renderProducts.js"

// Render products
renderProducts(products);

// Render Filter drop options
const filterSelect = document.querySelector("#filter");
const categories = ["All", ...new Set(products.map((p) => p.category))];

filterSelect.innerHTML = categories
    .map((c) => `<option value="${c}">${c}</option>`)
    .join("");


// Get data from the user and render the data in the page
const myForm = document.querySelector("form")

myForm.addEventListener("change", (event) => {
    event.preventDefault();

    let filterState = products;
    const data = Object.fromEntries(new FormData(event.currentTarget));

    filterState = searchByProducts(filterState, data.search);
    filterState = filterByCategory(filterState, data.filter);
    filterState = sortByProducts(filterState, data.sort);

    renderProducts(filterState);
});
