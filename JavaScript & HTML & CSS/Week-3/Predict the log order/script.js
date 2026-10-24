// Different async operations can be seen through exiersice folder .ie event-loop.js
import { runAsyncOperations, resetDisplayedData } from "./ObservedOutput.js";
import { displayUserData } from "./ExpectedOutput.js"

document.getElementById("render").addEventListener("click", runAsyncOperations);
document.getElementById("reset").addEventListener("click", resetDisplayedData);


// user enter data
document.getElementById("myForm").addEventListener("submit", displayUserData)