## Role:
### Role of main.js
- Write the logic for handling filters, sort, and search entirely inside main.js. Do not put filter or sort rules in the renderer.
- Keep the in-memory `filterState` in main.js.
- Listen for events from your input controls (search bar, dropdowns).
- Run the search, category filter, and sort logic in a specific order whenever an event occurs.
- Take the final, processed array and pass it as an argument to the renderer function.

### Role of renderProducts.js
- It should only act as a display mechanism.
- It exports a single renderer function that accepts an array of products.
- It loops through that provided array to build the product cards using DOM methods and textContent.
- It handles the "zero-results" message if the array passed to it is empty.

----------------------
## Understanding:
### Understanding better `index.html`(What needs to be done):
- Input Controls: Add form elements with clear labels for searching, sorting, and filtering by category.
- Status Indicators: Include a result summary element to display the total number of products found after applying a search or sort.
- Reset Action: Add a dedicated "Clear filters" button designed to wipe the current search and category state.
- Display Container: Create an empty product-list element where your JavaScript will later inject and render the product details.


### Understanding better `src/ui/renderProducts.js`(What needs to be done):
- Building the Cards: 
    It must export a function that takes your product data and constructs the UI elements. Crucially, the instructions specify using DOM methods (like document.createElement) and textContent to build these cards, rather than injecting raw HTML strings via innerHTML. This satisfies the checklist requirement that product names and descriptions are inserted safely as text.
- Handling Empty States: 
    If a user's search or filter combination results in an empty array, this module is responsible for generating and returning the "no results" or zero-results message to be displayed in the container.

### Understanding better `main.js`(What needs to be done):
**State Management**
- You need to maintain a single in-memory object or structure (like `filterState`) that tracks the current search term, selected category, and active sort preference.

**Event Handling & Execution Order**
- Set up event listeners on your HTML inputs (search bar, category dropdown, sort dropdown).
- When a user interacts with these controls, update the `filterState`.
- Run the search, category filter, and sort operations on your product data in a consistent, documented order.
- Pass the final, filtered, and sorted array to your `renderProducts` function to update the UI.

**Clear Functionality**
- When the "Clear filters" button is clicked, you must reset your in-memory `filterState` back to its defaults.
- You must also reset the actual HTML input controls on the page so they visually match the cleared state.

-------------------------------------
## Task:
- In `index.html` add labelled search, category, and sort controls, a result summary, a Clear filters button, and a product-list container. 
 - In `src/ui/renderProducts.js`, export a renderer that creates product cards with DOM methods and textContent. It also owns the zero-results message.
 - In src/main.js, keep one in-memory filterState. On each stable control event, run search, category filter, and sort in a documented order, then call the renderer. Clear filters resets both controls and state.
 - In src/styles/app.css, add a readable responsive card grid. Reuse the layout and focus rules learned in Weeks 1 and 2.

-----------------------
## Application flow:
```
[ src/data/products.js ] (Raw Data)
        │
        ▼
[ src/main.js ] ◄────────── (User Events) ─── [ index.html ] (Inputs: Search/Filter/Sort)
        │
        ▼ (Filtered & Sorted Data)
[ src/ui/renderProducts.js ] (DOM Builder)
        │
        ▼ (Generated Product Cards)
[ index.html ] (Container: #product-list)
```