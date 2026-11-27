# Product Explorer — Week 4, Thursday (Phase 2 of 3)
**Focus:** Debounce, AbortController, Race Conditions, and URL State Synchronization

---

## 🎯 Goal
Upgrade the Product Explorer from hardcoded constants to an interactive, URL-driven catalogue with debounced search, request cancellation (`AbortController`), and browser history navigation (`pushState`, `replaceState`, and `popstate`).

---

## 📋 Implementation Tasks

### 1. Native UI Controls
* Replace the hardcoded filter constants in `main.js` with labelled native HTML controls:
  * **Search Input:** `<input type="search" />` (or `type="text"`) with a `<label>`.
  * **Category Dropdown:** `<select>` dynamically populated using `uniqueCategories`.
  * **Sort Dropdown:** `<select>` for sorting options (e.g., `price-asc`, `price-desc`).
  * **Pagination Controls:** Previous and Next `<button>` elements.
* **Accessibility:** Ensure all controls have associated labels and clear, visible `:focus` / `:focus-visible` styles.

### 2. Debounce Utility (`src/utils/debounce.js`)
* Create `src/utils/debounce.js` and export a `debounce(fn, delay)` function using `setTimeout` and `clearTimeout`.
* Attach the debounced handler to the search input's `input` event so fast typing batches updates instead of firing on every keystroke.

### 3. URL State Module (`src/state/urlState.js`)
* Create `src/state/urlState.js` to read and write query parameters using `URLSearchParams`:
  * `q` (search query string)
  * `category` (selected category)
  * `sort` (selected sort order)
  * `page` (current page number)
* Ensure URL updates happen without triggering a full document reload.

### 4. Initial Load Hydration
* On first paint, read the current URL query string via `urlState.js`.
* Sync the native UI controls (inputs/selects) to match the URL values.
* Pass those parsed parameters into `productQueries` to render the matching initial view.

### 5. Syncing User Actions to Browser History
* Update the URL whenever the user changes `q`, `category`, `sort`, or `page`:
  * **Search (`q`):** Use `history.replaceState()` for search-as-you-type so intermediate keystrokes don't clutter the browser's Back stack.
  * **Filters & Pagination (`category`, `sort`, `page`):** Use `history.pushState()` so users can step backward and forward through meaningful view changes.

### 6. Handling Browser Navigation (`popstate`)
* Add a `window.addEventListener("popstate", ...)` listener.
* When triggered (via Back/Forward buttons), re-read the URL state, sync the UI controls to match, and re-run `productQueries` (and re-fetch if your app fetches per query).

### 7. Request Cancellation (`AbortController`)
* Maintain an active `AbortController` instance for the catalogue fetch.
* Before starting a new load, call `.abort()` on any in-flight controller, then instantiate a **new** `AbortController` for the new request.
* Pass `{ signal: controller.signal }` into `productsApi`.
* **Error Handling:** Ignore abort errors so cancelled requests never trigger the error UI:
  ```js
  if (error.name === "AbortError") return;