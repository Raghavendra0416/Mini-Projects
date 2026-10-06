// CounterA & CounterB
let makeCounter = (start) => {
    let count = start;

    return {
        increment: () => {
            count++;
            return count;
        },
        read: () => {
            return count;
        }
    };
};

let counterA = makeCounter(0);
let counterB = makeCounter(1);

//Update the HTML
// Counter A
let countA = document.getElementById("countA");
let incrementA = document.getElementById("counterA");

incrementA.addEventListener("click", () => {
    countA.innerText = counterA.increment();
});

// Counter B
let countB = document.getElementById("countB");
let incrementB = document.getElementById("counterB");

incrementB.addEventListener("click", () => {
    countB.innerText = counterB.increment();
});





