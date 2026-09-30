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
Input Values: 
    Net Amount: ₹50
    Tax Rate: 18%
Calculations:
Tax Rate:
Tax rate decimal: value/100
Calculation: 18/100 = 0.18

Tax:
Formula: Net amount × Tax rate decimal
Calculation: ₹50.00 × 0.18 = ₹9.00

Gross:
Formula: Net amount + Tax amount
Calculation: ₹50.00 + ₹9.00 = ₹59.00

Create a new Object and display the intial value(Before), new object(Result), inital value(After, same as before just to show the inital value object is not mutated by the function).

## How the page should look?
```
┌ Till tax calculator ───────────────┐
│ Net amount [20.00]  Tax rate [20] │
│ [Calculate]                       │
│                                   │
│ Net £20.00   Tax £4.00   Gross £24.00
│                                   │
│ Before  { net: 20, taxRate: 0.2 } │
│ Result  { net: 20, tax: 4, gross: 24 }
│ After   { net: 20, taxRate: 0.2 } │
└───────────────────────────────────┘
```

