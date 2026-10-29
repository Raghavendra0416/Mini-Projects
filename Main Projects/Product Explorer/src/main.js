import { products } from "./data/products.js";
import { searchByProducts, filterByCategory, sortByProducts } from "./domain/productQueries.js";
import { renderProducts } from "./ui/renderProducts.js"


// Render Filter drop options
const filterSelect = document.querySelector("#filter");
const categories = ["Select the below", ...new Set(products.map((p) => p.category))];

filterSelect.innerHTML = categories
    .map((c) => `<option value="${c}">${c}</option>`)
    .join("");


// Get data from the user and render the data in the page
const myForm = document.querySelector("form")
let filterState = products;
myForm.addEventListener("change", (event) => {
    event.preventDefault();

    console.log("Change Happened enter event listner")
    const data = Object.fromEntries(new FormData(event.currentTarget));

    filterState = filterByCategory(filterState, data.filter);
    filterState = sortByProducts(filterState, data.sort);
    filterState = searchByProducts(filterState, data.search);

    console.log(filterState);
    renderProducts(filterState);
});
