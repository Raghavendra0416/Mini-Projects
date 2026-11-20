import { createProductCard } from "./productCard.js";
import { paintEmpty } from "./requestState.js";

function renderProductList(products, container) {
    if (products.length === 0) {
        paintEmpty(container);
        return;
    }

    const fragment = document.createDocumentFragment();
    products.forEach((product) => {
        fragment.appendChild(createProductCard(product));
    });

    container.replaceChildren(fragment);

    // container.replaceChildren();
    // if (products.length === 0) {
    //     const emptyMessage = document.createElement("p");
    //     emptyMessage.textContent = "No Products available";
    //     container.appendChild(emptyMessage);
    //     return;
    // }
    // const fragment = document.createDocumentFragment();
    // products.forEach((product) => {
    //     fragment.appendChild(createProductCard(product));
    // });
    // container.appendChild(fragment);
}

export { renderProductList };

