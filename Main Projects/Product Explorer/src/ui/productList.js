import { createProductCard } from "./productCard.js";

function renderProductList(products, container) {
    container.replaceChildren();

    if (products.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "No Products available";
        container.appendChild(emptyMessage);
        return;
    }

    const fragment = document.createDocumentFragment();
    products.forEach((product) => {
        fragment.appendChild(createProductCard(product));
    });

    container.appendChild(fragment);
}

export { renderProductList };