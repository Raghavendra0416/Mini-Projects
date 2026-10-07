import { products } from "./data/products";
import { searchProducts, filterByCategory } from "./domain/productQueries";

console.log(products);
console.log(searchProducts(products, "wireless"));
console.log(filterByCategory(products, "electronics"));