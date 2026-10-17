Constructor instance method returns 25 and this is PriceTag.
Detached constructor method loses its receiver in strict mode, so this is undefined and a TypeError is thrown.
Bound constructor method returns 25 and this stays bound to the instance.
Factory method reads the closed-over amount and still returns 25 even when this is not the instance.
The value of this depends on the call site, not the function definition.
Closures keep values stable even when the method is detached or reused.
This demo uses ES modules, which are strict mode by default.
