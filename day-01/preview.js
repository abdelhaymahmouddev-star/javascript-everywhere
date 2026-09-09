let studentName = "Abdelhay";
studentName = "Mahmoud";

console.log(studentName);

const age = 20;
age = 21;



const student = {
  name: "Abdelhay",
  age: 20,
  student: true,
  favoriteLanguage: "JavaScript"
};

console.log(student.favoriteLanguage);



let score = 50;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

const tracks = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "NodeJS",
  "TypeScript",
  "MongoDB"
];

for (const track of tracks) {
  if (track.length > 6) {
    console.log(track);
  }
}