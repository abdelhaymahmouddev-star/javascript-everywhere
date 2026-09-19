const students = [
  { name: "Sara", score: 95, attendance: 92 },
  { name: "Ahmed", score: 85, attendance: 88 },
  { name: "Mona", score: 75, attendance: 80 },
  { name: "Omar", score: 65, attendance: 90 },
  { name: "Youssef", score: 55, attendance: 85 },
  { name: "Nour", score: 45, attendance: 75 },
  { name: "Ali", score: 82, attendance: 68 },
  { name: "Hana", score: 70, attendance: 72 },


  { name: "Broken", score: 90 }
];


const bandCounts = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0
};

let totalScore = 0;
let validStudents = 0;
let atRiskCount = 0;
let skippedRecords = 0;

let highestStudent = null;
let lowestStudent = null;


console.log(
  `${"Name".padEnd(10)} | ${"Score".padStart(5)} | ${"Attendance".padStart(10)} | ${"Grade".padEnd(6)} | Status`
);

console.log("-".repeat(55));

for (const student of students) {
  
  if (
    student.name === undefined ||
    student.score === undefined ||
    student.attendance === undefined
  ) {
    skippedRecords++;
    continue;
  }

  let letter;

  // Five-band grading
  if (student.score >= 90 && student.score <= 100) {
    letter = "A";
  } else if (student.score >= 80) {
    letter = "B";
  } else if (student.score >= 70) {
    letter = "C";
  } else if (student.score >= 60) {
    letter = "D";
  } else {
    letter = "F";
  }

  
  bandCounts[letter]++;

  
  const status =
    student.score < 60 || student.attendance < 70
      ? "At risk"
      : "OK";

  if (status === "At risk") {
    atRiskCount++;
  }


  totalScore += student.score;
  validStudents++;


  if (highestStudent === null || student.score > highestStudent.score) {
    highestStudent = student;
  }


  if (lowestStudent === null || student.score < lowestStudent.score) {
    lowestStudent = student;
  }

  
  console.log(
    `${student.name.padEnd(10)} | ${String(student.score).padStart(5)} | ${String(student.attendance).padStart(10)} | ${letter.padEnd(6)} | ${status}`
  );
}


const average = totalScore / validStudents;

console.log("\n--- Class Summary ---");

console.log(`A: ${bandCounts.A}`);
console.log(`B: ${bandCounts.B}`);
console.log(`C: ${bandCounts.C}`);
console.log(`D: ${bandCounts.D}`);
console.log(`F: ${bandCounts.F}`);

console.log(`Class average: ${average.toFixed(1)}`);

console.log(
  `Highest scoring student: ${highestStudent.name} (${highestStudent.score})`
);

console.log(
  `Lowest scoring student: ${lowestStudent.name} (${lowestStudent.score})`
);

console.log(`Students at risk: ${atRiskCount}`);

console.log(`Skipped invalid records: ${skippedRecords}`);