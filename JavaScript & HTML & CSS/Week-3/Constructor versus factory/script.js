import { rows as constructorRows } from "./constructor.js";
import { rows as factoryRows } from "./factory.js";

console.log("contructorRows:", constructorRows);
console.log("factorRows:", factoryRows);

// Header for the table
const header = `
        <div class="displayed-data table-head">
            <span>Call</span>
            <span>Amount returned</span>
            <span>this</span>
        </div>
    `;

const extraInfoForFactory = `
            <div class="displayed-data table-data">
                <span>describe()</span>
                <span>Amount: ${factoryRows[0]?.result}</span>
                <span>Clousre keeps value</span>
            </div>
    `;

// Render Data
function render(ele, rows, type) {
    if (rows === "undefined") return undefined;
    const updatedData = rows.map((data) => {
        const call = data?.call.charAt(0).toUpperCase() + data?.call.slice(1);
        // const result = data?.result.charAt(0).toUpperCase() + data?.result.slice(1);
        // const thisLabel = data?.thisLabel.charAt(0).toUpperCase() + data?.thisLabel.slice(1);
        return (
            `<div class="displayed-data table-data">
                <span>${call}</span>
                <span>Result: ${data?.result}</span>
                <span>thisLabel: ${data?.thisLabel}</span>
            </div>
        `);
    }).join("");

    if (type === "factory") {
        ele.innerHTML = header + extraInfoForFactory + updatedData;
    }
    else {
        ele.innerHTML = header + updatedData;
    }

}



// Get Elements
const constructorEle = document.getElementById("constructor");
const factoryEle = document.getElementById("factory");

// Update Constructor
render(constructorEle, constructorRows, "constructor");
render(factoryEle, factoryRows, "factory");
