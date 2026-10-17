import { rows as constructorRows } from "../constructor.js";
import { rows as factoryRows } from "../factory.js";

function formatThisValue(value) {
    if (value === undefined) {
        return "undefined";
    }

    if (value === null) {
        return "null";
    }

    if (typeof value === "object") {
        return value?.constructor?.name || "Object";
    }

    return String(value);
}

function renderRows(sectionId, title, rows) {
    const section = document.getElementById(sectionId);
    if (!section) {
        return;
    }

    const header = `
        <div class="table-header">
            <span>Call</span>
            <span>Amount returned</span>
            <span>this</span>
        </div>
    `;

    const body = rows
        .map((entry) => {
            const resultText = entry.failed ? `Error: ${entry.result}` : `Amount ${entry.result}`;
            const resultClass = entry.failed ? "is-error" : "is-success";
            const thisText = entry.thisLabel === "undefined" ? "undefined" : formatThisValue(entry.thisLabel);

            return `
                <div class="result-row">
                    <div class="call-label">Call: ${entry.call}</div>
                    <div class="result-value ${resultClass}">Result: ${resultText}</div>
                    <div class="this-value">this: ${thisText}</div>
                </div>
            `;
        })
        .join("");

    section.innerHTML = `${header}${body}`;
}

function renderExamples() {
    renderRows("constructor", "Constructor", constructorRows);
    renderRows("factory", "Factory", factoryRows);
}

document.addEventListener("DOMContentLoaded", () => {
    const runButton = document.getElementById("run-examples");
    if (runButton) {
        runButton.addEventListener("click", renderExamples);
    }

    renderExamples();
});
