//Price & Gross calculations 
let withTax = (rate) => {
    taxRate = rate / 100;
    return function (price) {
        return (price * (1 + taxRate));
    }
}

rateVal = 20;
priceVal1 = 10;
priceVal2 = 20;

let priceCal = withTax(rateVal);
let gross1 = priceCal(priceVal1);
let gross2 = priceCal(priceVal2);

// Update the HTML
const rate = document.querySelectorAll(".rate");
rate[0].textContent = priceVal1 + "%";
rate[1].textContent = priceVal2 + "%";

const price = document.querySelectorAll(".price");
price[0].textContent = "£" + priceVal1;
price[1].textContent = "£" + priceVal2;

const gross = document.querySelectorAll(".gross");
gross[0].textContent = "£" + gross1;
gross[1].textContent = "£" + gross2;