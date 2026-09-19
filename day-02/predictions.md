# Day 02 — Predictions

1. `console.log("5" + 3);` → Prediction: `"53"` → Actual: `53` 
   - The `+` operator with a string performs string concatenation.

2. `console.log("5" - 3);` → Prediction: `2` → Actual: `2` 
   - The `-` operator converts the string `"5"` to a number.

3. `console.log(5 + true);` → Prediction: `6` → Actual: `6` 
   - `true` is converted to `1` in numeric addition.

4. `console.log("5" === 5);` → Prediction: `false` → Actual: `false` 
   - Strict equality does not perform type conversion.

5. `console.log("5" == 5);` → Prediction: `true` → Actual: `true` 
   - Loose equality performs type coercion.

6. `console.log(typeof null);` → Prediction: `"object"` → Actual: `object` 
   - `typeof null` returns `"object"` because of a historical JavaScript behavior.

7. `console.log(typeof []);` → Prediction: `"object"` → Actual: `object` 
   - Arrays are objects in JavaScript.

8. `console.log(0 || "default");` → Prediction: `"default"` → Actual: `default` 
   - `0` is falsy, so `||` returns the second operand.

9. `console.log(0 ?? "default");` → Prediction: `0` → Actual: `0` 
   - `??` only uses the second operand for `null` or `undefined`.

10. `console.log(Boolean(""));` → Prediction: `false` → Actual: `false` 
    - An empty string is falsy.

11. `console.log(Boolean("false"));` → Prediction: `true` → Actual: `true` 
    - `"false"` is a non-empty string, so it is truthy.

12. `console.log(Boolean([]));` → Prediction: `true` → Actual: `true` 
    - Arrays are objects and objects are truthy, even when empty.

13. `console.log(10 % 3);` → Prediction: `1` → Actual: `1` 
    - The remainder after dividing 10 by 3 is 1.

14. `console.log(null + 1);` → Prediction: `1` → Actual: `1` 
    - `null` is converted to `0` in numeric addition.

15. `console.log(undefined + 1);` → Prediction: `NaN` → Actual: `NaN` 
    - `undefined` cannot be converted to a valid number.