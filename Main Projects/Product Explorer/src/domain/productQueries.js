"use strict";
function searchByProducts(products, query) {
    if (!query || query.trim().length === 0) return [...products];
    let userQuery = (query || "").trim().toLowerCase();

    const queryProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(userQuery);
    });
    return queryProducts;
}

function filterByCategory(products, category) {
    // if (!category || category.trim().length === 0) return [...products];
    let categoryQuery = (category || "").trim().toLowerCase();
    if (categoryQuery === "all" || categoryQuery.length === 0) return [...products];
    const categoryProducts = products.filter((product) => {
        return product.category.toLowerCase() === categoryQuery;
    });
    return categoryProducts;
}

// Create a Sorting of Products based on key -> name, price, rating.
// Don't update the main array
function sortByProducts(products, sortKey) {
    if (!sortKey) return [...products];
    let sortedProducts = [...products];
    if (sortKey.toLowerCase() === "name") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortKey.toLowerCase() === "price") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        // rating
        sortedProducts.sort((a, b) => {
            // The Book with no rating will be at last
            if (!a.rating) return 1;
            if (!b.rating) return -1;

            return (b.rating - a.rating)
        }
        )
    }
    return sortedProducts;
}

export {
    searchByProducts,
    filterByCategory,
    sortByProducts,
}
