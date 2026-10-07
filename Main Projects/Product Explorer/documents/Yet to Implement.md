## Date
### 30/09/2026 Wednesday:
- Add README.md with: what the project is, how you will run it later (npx --yes serve . and node tests/productQueries.test.js), and that the catalogue must not be mutated.

### 06/10/2026 Tuesday:
Create functions:
- searchProducts(products, query): case-insensitive match on name. Trim the query. An empty query returns a new array of all items (same product objects, new array).
- filterByCategory(products, category): keep that category. A sentinel such as "all" (document it) returns a new array of all items. Unknown category returns [].
Functions Can:
- Neither function may push, splice, sort, or assign fields on the arguments.
- From a Node session or a tiny temporary log in src/main.js, call both functions against data/products.js and confirm the frozen fixtures still throw if you assign a field.
- Do not render a list yet unless a console.log of names helps you. The page can stay a heading.