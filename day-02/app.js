const scoreInput = document.getElementById("scoreInput");
const checkButton = document.getElementById("checkButton");
const clearButton = document.getElementById("clearButton");

const message = document.getElementById("message");
const scoreList = document.getElementById("scoreList");


const history = [];

checkButton.addEventListener("click", function () {
  const rawValue = scoreInput.value.trim();


  const score = Number(rawValue);


  if (rawValue === "" || Number.isNaN(score) || score < 0 || score > 100) {
    message.textContent = "Please enter a number between 0 and 100";
    return;
  }

  let grade;

 
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }


  history.push({
    score: score,
    grade: grade
  });

  message.textContent = `Score: ${score} → Grade: ${grade}`;


  scoreList.innerHTML = "";

 
  for (const item of history) {
    const li = document.createElement("li");

    li.textContent = `Score: ${item.score} → Grade: ${item.grade}`;

    scoreList.appendChild(li);
  }

 
  console.log("Full history:", history);
});

clearButton.addEventListener("click", function () {

  history.length = 0;


  scoreList.innerHTML = "";

  message.textContent = "";

  scoreInput.value = "";

  console.log("History cleared:", history);
});