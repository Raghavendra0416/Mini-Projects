class PriceTag {
    constructor(amount) {
        this.amount = amount;
    }

    read() {
        console.log(this);
        return this.amount;
    }
}

// Instance
const tag = new PriceTag(25);

// Instance Function
// A function defined inside a class and called through its object (instance).
// const instanceFun = new PriceTag(20);
console.log(tag.read());


// Detached Function
// A function that is separated from the object it belongs to and called independently.
const detachedFun = new tag(10).read;
// The body runs in strict mode, so this is undefined and this.amount throws a TypeError. That’s the expected result.
try {
    detachedFun(); //Will throw error
} catch (e) {
    console.log(e.message);
}

// Bound Function
// A function whose this value is permanently set using .bind().
const boundFun = tag.read.bind(tag);
console.log(boundFun());
