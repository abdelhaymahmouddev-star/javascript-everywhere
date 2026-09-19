
const name = "Sara";
const age = 20;
const isStudent = true;
const emptyValue = null;
let notAssigned;

const user = {
  name: "Sara",
  age: 20,
};

const skills = ["HTML", "CSS", "JavaScript"];

console.log(`name → "${name}" → ${typeof name}`);
console.log(`age → ${age} → ${typeof age}`);
console.log(`isStudent → ${isStudent} → ${typeof isStudent}`);
console.log(`emptyValue → ${emptyValue} → ${typeof emptyValue}`);
console.log(`notAssigned → ${notAssigned} → ${typeof notAssigned}`);
console.log(`user → ${JSON.stringify(user)} → ${typeof user}`);
console.log(`skills → ${JSON.stringify(skills)} → ${typeof skills}`);




// typeof null is misleading because it returns "object",
// even though null represents the absence of a value.
console.log(`typeof null → ${typeof null}`);

// typeof [] is misleading because arrays are objects,
// but typeof [] returns only the general type "object".
console.log(`typeof [] → ${typeof []}`);

// Correct way to detect an array:
console.log(`Array.isArray([]) → ${Array.isArray([])}`);




const numberFromString = Number("42");
console.log(`Number("42") → ${numberFromString} → ${typeof numberFromString}`);

const stringFromNumber = String(42);
console.log(`String(42) → "${stringFromNumber}" → ${typeof stringFromNumber}`);

const invalidNumber = Number("hello");
console.log(`Number("hello") → ${invalidNumber} → ${typeof invalidNumber}`);

const parseResult = parseInt("42px");
const numberResult = Number("42px");

console.log(`parseInt("42px") → ${parseResult}`);
console.log(`Number("42px") → ${numberResult}`);




const values = [
  false,
  0,
  -0,
  0n,
  "",
  null,
  undefined,
  NaN,
  [],
  {},
  "0",
  "hello",
];

for (const value of values) {
  console.log(
    `${String(value)} → ${Boolean(value) ? "truthy" : "falsy"}`
  );
}



const value = 0;

console.log(`value || "fallback" → ${value || "fallback"}`);
console.log(`value ?? "fallback" → ${value ?? "fallback"}`);

// When 0 is a valid value, I want ?? because it keeps 0,
// while || treats 0 as falsy and uses the fallback.