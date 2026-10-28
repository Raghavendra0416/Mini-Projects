### Why the domain stays functional
* **Products as Records:** Our products are simply data records rather than complex objects.
* **Pure Queries:** Queries strictly operate by taking data in and returning a new list out.
* **No `this` Traps:** We avoid `this` because it creates unpredictable call-site traps that aren't needed here.
* **Module Boundaries:** JavaScript modules already provide a clean and sufficient boundary for our code.
* **Behavior Over Time:** We are holding off on using classes until a concept genuinely requires identity and behavior tracking over time.

### Filter:
- Based on Category.
- If "all" or "length 0" return all products.

### Search:
- Based on Product name.
- If product name "empty" or "length 0" applied return all products.

### Sort:
- Based on "name", "price", "rating".
- If no input return null.