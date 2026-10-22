const result = document.getElementById("result");

function runAsyncOperations() {
    console.log("1. Click-start");
    result.innerText += "1. Click-Start" + "\n";

    setTimeout(() => {
        console.log("2. Timeout-0");
        result.innerText += "2. Timeout-0" + "\n";
    }, 0);

    Promise.resolve().then(() => {
        console.log("3. Promise-then");
        result.innerText += "3. Promise-then" + "\n";
    })

    console.log("4. Click-end");
    result.innerText += "4. Click-end" + "\n";

    const data = fakeFetch().then(() => {
        console.log("5. Promise-starts");
        result.innerText += "5. Promise-starts" + "\n";
    })
    console.log("6. Returned fake fetch:", data);
    result.innerText += "6. Returned fake fetch:" + data + "\n";

}

function fakeFetch() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("catalogue"), 0);
    });
}

function resetDisplayedData() {
    result.innerText = "";
}


export {
    runAsyncOperations,
    resetDisplayedData,
}
