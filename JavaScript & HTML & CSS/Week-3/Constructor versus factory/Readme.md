## Understanding the mini-project purpose:
- A constructor (function or class) PriceTag used with new. It has a method that logs this and returns amount.
- Logs for:
    - method call on the instance
    - the same function stored in a variable and called without an object
    - the same function with .bind(instance) or .call(instance)
- A factory createPriceTag(amount) that returns an object whose "describe" behaviour uses a closure (or a method you can contrast). Log this inside that behaviour as well so the difference is visible.
- A short NOTES.md (five to eight lines) that records what printed for each call.

## What needs to be done?
#### Constructor:
- Write a constructor function (or class) that stores an amount, plus a method that logs this and returns this.amount. Then you call that same method three different ways.
    - Instance Method - `tag.describe()`
    - Detached function - `const fn = tag.describe;` `fn()`
    - Bound function - `tag.describe.bind(tag)()` or `.call(tag)`.
- What will we understand:
    - the function didn’t change, but this did, because the call site changed. Detaching a method from its object is the classic way this gets “lost” (e.g., passing tag.describe as a callback).

#### Factory:
- A plain function that returns an object.
- Its `describe` doesn’t need `this` to find the amount. It reads amount from the closure (the variable captured from the factory’s scope).
- You also log `this` inside it so you can see that, even if this is wrong or different, the closure still returns.
- What will we understand:
    - closures give you a way to avoid the `this` problem entirely, because the value is captured lexically rather than looked up on whatever object called the function.


## How the page should look?
- One section is labelled Constructor and one Factory.
- Each row names the call that ran, the amount returned, and what this was.
- Keep the raw console logs too, but the page should let you compare the calls without reading an unlabelled stream.

## How the page should work?
- A web page that runs these when you click Run examples. It should show results in labelled rows, not just a raw console stream:
    - A Constructor section and a Factory section.
    - Each row shows: which call ran, the amount returned, and what `this` was.
    - For the detached call, show the error or undefined and document which one you got.
    - Still keep the real console.log output too

## Things that need to note?
- Strict mode vs. sloppy mode changes the detached result. In a class or with "use strict", this is undefined and you’ll get a TypeError. In sloppy mode it’s the global object. Decide which you’re using and say so in the row and in NOTES.md.
- Catch the detached error with try/catch so the page doesn’t break, and display the error message in the row.
- Display this meaningfully. Printing an object as [object Object] isn’t helpful. Show something like this: PriceTag (e.g., via this?.constructor?.name) or this: undefined.
- Don’t use an arrow function for the constructor’s method if you want to demonstrate losing this. Arrow functions capture this lexically and would hide the very behavior you’re trying to show.

## Layout
```
┌ Constructor versus factory             [Run examples] ┐
│ Constructor                                           │
│ instance method       amount 25   this: PriceTag      │
│ detached function     error or undefined, documented │
│ bound function        amount 25   this: PriceTag      │
│                                                       │
│ Factory                                               │
│ describe()           amount 25   closure keeps value │
└───────────────────────────────────────────────────────┘
```