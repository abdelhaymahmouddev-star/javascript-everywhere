const students = [
  { name: "Ahmed", score: 95 },
  { name: "Sara", score: 82 },
  { name: "Omar", score: 91 },
  { name: "Mona", score: 68 },
  { name: "Ali", score: 75 }
];

let excellent = 0;
let good = 0;
let needsWork = 0;

for (const student of students) {
  if (student.score >= 90) {
    console.log(`${student.name}: Excellent`);
    excellent++;
  } else if (student.score >= 70) {
    console.log(`${student.name}: Good`);
    good++;
  } else {
    console.log(`${student.name}: Needs work`);
    needsWork++;
  }
}

console.log(`${excellent} Excellent, ${good} Good, ${needsWork} Needs work`);