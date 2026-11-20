// Validation of id,name,price... other are not yet added
// and also validation fails we need to throw safe error.

const url = "/src/data/fallback-products.json"
// const url = new URL("../data/fallback-products.json", import.meta.url);


function fetchProducts() {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
    })
    // .then((data) => {
    //     return data;
    // }).catch((err) => {
    //     console.log('Error fetching JSON:', err);
    // });
}

export { fetchProducts };

//Why are we using relative path from index.html or new URL("path",import.meta.url) ?
//Because the script will be loded in html and if we are to give path from the js file
//we are writing then browser/node will not be able to get the data.