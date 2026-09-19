// 4.1 for loop
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}


const tracks = [
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "TypeScript",
  "MongoDB"
];

let position = 1;

for (const track of tracks) {
  console.log(`${position} -> ${track}`);
  position++;
}


const student = {
  name: "Sara",
  age: 20,
  track: "JavaScript",
  level: "Intermediate",
  country: "Egypt",
  completed: true
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}


let value = 100;

while (value >= 1) {
  console.log(value);
  value = value / 2;
}

let number = 10;

do {
  console.log(`Runs once: ${number}`);
  number++;
} while (number < 5);





const scores = [45, 72, 30, 88, 49, 91, 96, 85, 100];

for (const score of scores) {
  // Skip scores below 50
  if (score < 50) {
    continue;
  }

  // Stop at the first score above 95
  if (score > 95) {
    break;
  }

  console.log(score);
}


const numbers = [12, 7, 25, 3, 18, 42, 9, 15];

let sum = 0;
let highest = numbers[0];
let lowest = numbers[0];

for (const number of numbers) {
  // Calculate the sum
  sum += number;

  // Find the highest number without Math.max()
  if (number > highest) {
    highest = number;
  }

  
  if (number < lowest) {
    lowest = number;
  }
}

const average = sum / numbers.length;

console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Highest:", highest);
console.log("Lowest:", lowest);