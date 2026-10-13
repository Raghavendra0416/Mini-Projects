// Factory
let lastThisLabel;

function createPriceTag(amount) {
    return {
        describe: function () {
            console.log(this);
            lastThisLabel = String(this?.constructor?.name);
            return amount;
        }
    };
}

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

const tag = createPriceTag(25);
const detachedFun = tag.describe;
const boundFun = tag.describe.bind(tag);

const rows = [
    runCall("instance method", () => tag.describe()),
    runCall("detached function", () => detachedFun()),
    runCall("bound function", () => boundFun()),
];

console.log("Rows: ", rows);

export {
    createPriceTag,
    rows
};
