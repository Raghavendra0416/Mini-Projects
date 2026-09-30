// Functions to calculate values
const taxRate = (val) => val / 100;
const tax = (netValue, rate) => netValue * rate;
const gross = (netValue, taxAmount) => netValue + taxAmount;

// Set text on every element with a given class
function setByClass(className, value) {
    document.querySelectorAll("." + className).forEach(el => {
        el.textContent = value;
    });
}

// Get data from the user
let netInpValue = 0;
let taxRateInpValue = 0;
document.getElementById("myForm").addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target.netAmount.value, e.target.taxRate.value);

    //Convertion String to Number
    const netVal = Number(e.target.netAmount.value);
    const taxRateVal = Number(e.target.taxRate.value);

    // Calculations
    const taxRateOut = taxRate(taxRateVal);
    const taxOut = tax(netVal, taxRateOut);
    const grossOut = gross(netVal, taxOut);
    console.log("taxRate:", taxRateOut, "tax:", taxOut, "gross:", grossOut);

    // Update the page
    setByClass("netValue", netVal.toFixed(2));
    setByClass("taxValue", taxOut.toFixed(2));
    setByClass("taxRateValue", taxRateVal + "%");
    setByClass("grossValue", grossOut.toFixed(2));
});


