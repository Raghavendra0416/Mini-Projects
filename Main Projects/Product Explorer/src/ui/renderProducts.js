const productsDisplayElement = document.querySelector("#products")

function renderProducts(products) {
    // const fragment = document.createDocumentFragment();
    products.map((product, index) => {
        // Creating elements
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
        let span4 = document.createElement("span");

        // Assigning inner text
        span1.innerText = product.name;
        span2.innerText = product.catgory;
        span3.innerText = product.price;
        span4.innerText = product.rating;

        // console.log(`span ${index}`, span1.innerText);


        
        // productsDisplayElement.innerHTML = div;
        // fragment.append(span1);
        // console.log(`fragment inside index ${index}: `, fragment);
    });

    // console.log(fragment);
    // productsDisplayElement.innerHTML = fragment;
}

export {
    renderProducts,
}