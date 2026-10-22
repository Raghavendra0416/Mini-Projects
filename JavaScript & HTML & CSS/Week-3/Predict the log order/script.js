// Different async operations can be seen through exiersice folder .ie event-loop.js
import { runAsyncOperations, resetDisplayedData } from "./ObservedOutput.js"
document.getElementById("render").addEventListener("click", runAsyncOperations);
document.getElementById("reset").addEventListener("click", resetDisplayedData);


// user eneterda data