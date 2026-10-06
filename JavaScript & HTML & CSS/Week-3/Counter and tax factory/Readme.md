## About the Page:
- The Page Will be having Basic Styling.
- The first has Counter A and Counter B, each with its own value and increment button.
- The second has two tax examples showing the rate, input price, and gross result. 
- Two counters on the page. Clicking "A" does not change "B". That means a click in one panel must never alter the other panel's hidden value.
- Visible proof: show the closed-over rate on the page (for example "rate 0.2") next to a calculated gross.
- Two different rates (withTax(0.2) and withTax(0.05)) must not overwrite each other.
- We are calculating the standard sales tax. 
- Formula: `Decimal Formula: Gross Amount = Price × (1 + Tax Rate)`.


## Functions needed for this page:
- `makeCounter(start)`: returns an object (or two functions) that can increment and read a count. The count is not a global.
- `withTax(rate)` returns a function i.e `price => gross amount`. After withTax returns, calling the inner function still uses rate.(Clousers).
- Two different rates (withTax(0.2) and withTax(0.05)) must not overwrite each other.
- makeCounter returns object consists of functions and withTax returns a function. Both follows the clousers.


## Know for sure
- Function call, arguments, return
- Block scope (let / const)
- Closure (the binding, not a snapshot you cannot change)
- Pure function
- map / filter / reduce
- import / export and type="module" (in package,json).