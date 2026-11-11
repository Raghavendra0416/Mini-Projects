function createProductCard(product) {
    const article = document.createElement("article");
    article.dataset.productId = product.id;

    const name = document.createElement("span");
    const category = document.createElement("span");
    const price = document.createElement("span");
    const rating = document.createElement("span");

    name.textContent = `Product: ${product.name}`;
    category.textContent = `Category: ${product.category}`;
    price.textContent = `Price: $${product.price}`;
    rating.textContent = `Rating: ${product.rating ?? "No rating"}`;

    article.append(name, category, price, rating);
    return article;
}

export { createProductCard };
