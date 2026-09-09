const name = "Abdelhay";
const city = "Qena";
const reason = "I joined to improve my JavaScript skills";

function createSentence(name, city, reason) {
  return `My name is ${name}, I live in ${city}, and I joined because ${reason}.`;
}

const sentence = createSentence(name, city, reason);

console.log(sentence);
console.log("Node version:", process.version);