## What needs to be achived
- The Page should take `Net Amount` & `Tax Rate` from the user.
- In Background the function should calculate the `Tax`, `Gross`, `Tax Rate`.
- The Page should show Proof Pannel:
    Before: Input entered by user(Tax Rate should be the calculated one i.e value/100).
    Result: The output Object data.
    After: Provide the Input user has entered(to show the immutability of original obj).

## Formulas:
Tax Rate: value/100;
Tax Calculation: tax = net * taxRate;
Gross Calculation: gross = net + tax;

### Example:
Input Values: ₹20.00 & 
