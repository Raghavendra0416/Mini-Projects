// Constructor
let lastThisLabel;

class PriceTag {
    constructor(amount) {
        this.amount = amount;
    }

    describe() {
        console.log(this);
        lastThisLabel = String(this?.constructor?.name);
        return this.amount;
    }
}

// Runs one call and returns a record the page can turn into a row
function runCall(name, fn) {
    lastThisLabel = undefined;
    let result;
    let failed = false;
    try {
        result = fn();
    } catch (e) {
        result = e.message;
        failed = true;
    }
    return { call: name, result, failed, thisLabel: lastThisLabel };
}

const tag = new PriceTag(25);
const detachedFun = tag.describe;
const boundFun = tag.describe.bind(tag);

const rows = [
    runCall("instance method", () => tag.describe()),
    runCall("detached function", () => detachedFun()),
    runCall("bound function", () => boundFun()),
];

console.log("Rows: ", rows);

// Understanding:
// Instance Method: A method defined inside a class and called using an instance (object) of that class is called an instance method.
// Example: tag.describe() — here, tag is the instance and describe() is the instance method.

//----------------
// Detached Fucntion:
// - const detachedFun = tag.describe; copies the function reference, not the function's data or this value.
// - detachedFun() calls the function without an object as its receiver.
// - JavaScript doesn't automatically know which object this should refer to, so this becomes undefined in a class method called this way.
// - Accessing this.amount then throws a TypeError.
// Remember: this depends on how a function is called, not where the function was originally defined.

// Remember for interviews:
// - Detached function: a function called without its original receiver object.
// - bind(): permanently sets the this value for the returned function.
// - Detached functions are not inherently wrong; you just need to handle this correctly when necessary.

//-------------------
// Bound Functions:
// tag.describe.bind(tag) creates a new function with this permanently set to tag.
// boundFun() can now be called independently, but this still refers to tag.
// Therefore, this.amount returns 25.

// Does bound mean bind(), call(), or apply() ?
// Not exactly. They are related, but behave differently.
// tag.describe.bind(tag)(); // Bound function
// tag.describe.call(tag);   // Calls immediately
// tag.describe.apply(tag);  // Calls immediately

// Method | Purpose
// bind(): Returns a new function with this set for future calls.
// call(): Calls the function immediately with the specified this.
// apply(): Like call(), but passes arguments as an array.

// Where is this useful?
// - Passing class methods as callbacks.
// - Handling event listeners in class- based components.
// - Using timers such as setTimeout() and setInterval().
// - Preserving the correct this when passing methods to other functions.