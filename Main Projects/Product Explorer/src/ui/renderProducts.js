const productsDisplayElement = document.querySelector("#products")

function renderProducts(products) {
    if (products.length === 0) productsDisplayElement.innerText = "No Products available";

    // clear inner elements before rendering
    productsDisplayElement.innerHTML = "";

    const fragment = document.createDocumentFragment();
    // const template = document.createElement('template');
    products.forEach((product) => {
        // Creating elements
        const item = document.createElement("div");
        let name = document.createElement("span");
        let category = document.createElement("span");
        let price = document.createElement("span");
        let rating = document.createElement("span");

        // Assigning inner text
        name.textContent = `Product: ${product.name}`;
        category.textContent = `Category: ${product.category}`;
        price.textContent = `Price: $${product.price}`;
        rating.textContent = `Rating: ${product.rating}` ?? "Rating: No rating ";

        item.append(name, category, price, rating);

        fragment.appendChild(item);
        // template.appendChild(item);

    });
    productsDisplayElement.appendChild(fragment);
}

export {
    renderProducts,
}