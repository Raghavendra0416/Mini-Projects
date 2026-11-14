import favourites from "../data/favourites.js";
import { products } from "../data/products.js";

function isFavourite(id) {
    return favourites.has(id);
}

function toggleFavourite(id) {
    if (favourites.has(id)) {
        favourites.delete(id);
    } else {
        favourites.add(id);
    }
}

// export function getFavouriteProducts() {
//     return products.filter((p) => favourites.has(p.id));
// }

export {
    isFavourite,
    toggleFavourite,
}