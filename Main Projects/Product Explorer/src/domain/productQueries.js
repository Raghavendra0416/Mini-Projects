function searchProducts(products, query) {
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

exports = {
    searchProducts,
    filterByCategory,
}
