const log = console.log;
// Intializing variables
let a = 0;
let b = 1;
const c = 2;
let d = "3";
let e = "2";
let f = "1";
let s = "string value";
let obj = { name: "Joe", age: 28 };
let n = null;
let u = undefined;

// Comparison
log("-----Comparision between values-----")
// Different Values
log("Loose & Strict Comparision of Different values:");
log(a == b); // Loose Comparision
log(a === b) // Strict Comparision

// Same Values 
log("Loose & Strict Comparision of same values:");
log(b == f) // Loose Comparision
log(b === f) //Strict Comparision

// Checking 0 & 1
log("Loose & Strict Comparision of 0 & 1:");
log("0's:")
log(0 == false);   // Loose Comparision
log(0 === false);  // Strict Comparision
log(0 == true);    // Loose Comparision
log(0 === true);   // Strict Comparision

log("1's:")
log(1 == true);    // Loose Comparision
log(1 === true);   // Strict Comparision
log(1 == false);   // Loose Comparision
log(1 === false);  // Strict Comparision

//Checking null & undefined
log("Loose & Strict Comparision of null & Uundefined:");
log(null == undefined);   // Loose Comparision
log(null === undefined); // Strict Comparision

// Checking Object
log("----Checking Objects-----")
log("Intial Object before Changing and Comparision:", obj);
let obj2 = obj;
log("Loose Comparision of Objects:", obj == obj2);
log("Strict Comparision of Objects:", obj === obj2);

obj2.name = "Darin";

log("obj:", obj); //Original
log("obj2", obj2); //Copied Object

let obj3 = { ...obj };
log("Loose Comparision of Objects:", obj == obj3);
log("Strict Comparision of Objects:", obj === obj3);

obj3.name = "Eren";

log("obj:", obj); //Original
log("obj3", obj3); //Copied Object