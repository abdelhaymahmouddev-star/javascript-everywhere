function getGrade(score) {
  if (score > 100 || score < 0) {
    return "Invalid score";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Test all five grade bands
console.log(`95 → ${getGrade(95)}`);
console.log(`85 → ${getGrade(85)}`);
console.log(`75 → ${getGrade(75)}`);
console.log(`65 → ${getGrade(65)}`);
console.log(`45 → ${getGrade(45)}`);

// Test invalid input
console.log(`101 → ${getGrade(101)}`);
console.log(`-1 → ${getGrade(-1)}`);

// 3.2 — Same logic as a ternary

function getResult(score) {
  return score >= 60 ? "pass" : "fail";
}

console.log(`75 → ${getResult(75)}`);
console.log(`45 → ${getResult(45)}`);

// A nested ternary would make the five-band grading logic harder to read,
// so an if / else if / else chain is clearer and easier to maintain.


// 3.3 — switch and breaking it on purpose

const letterGrade = "B";

switch (letterGrade) {
  case "A":
    console.log("Excellent!");
    break;

  case "B":
    console.log("Very good!");
    

  case "C":
    console.log("Good");
    break;

  case "D":
    console.log("Needs improvement");
    break;

  case "E":
    console.log("Poor");
    break;

  case "F":
    console.log("Fail");
    break;

  default:
    console.log("Invalid grade");
    break;
}



const score1 = 85;
const attendance1 = 90;

if (score1 >= 70 && attendance1 >= 80) {
  console.log("Certificate awarded");
}

const score2 = 55;
const attendance2 = 70;

if (score2 < 60 || attendance2 < 50) {
  console.log("Review needed");
}

const score3 = 75;
const attendance3 = 85;

if (score3 >= 70 && attendance3 >= 80) {
  console.log("Certificate awarded");
}

const score4 = 80;
const attendance4 = 40;

if (score4 < 60 || attendance4 < 50) {
  console.log("Review needed");
}