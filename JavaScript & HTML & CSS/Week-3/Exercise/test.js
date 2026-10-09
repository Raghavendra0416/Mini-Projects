const log = console.log;
class classA {
    describe() {
        log(this);
    }
}
let objA = new classA();

//----
function createItemWithClosure(amount) {
    return {
        describe() {
            console.log(`The amount is ${amount}`);
        }
    };
}

const item2 = createItemWithClosure(100);
// item2.describe();

const detachedDescribe = item2.describe;
detachedDescribe();

//-------------------
const parent = { kind: "sticker" };
const child = Object.create(parent);
console.log(`Child's initial kind: ${child.kind}`);

child.kind = "magnet";
console.log(`Parent's kind: ${parent.kind}`);
console.log(`Child's new kind: ${child.kind}`);

