export {};
const duties: String[] = ["write code", "fix bugs"];
duties.push("add tests");

duties.map((duty) => {
  console.log(duty.toLowerCase());
});

// Tuples
let person: [string, number] = ["John", 30];
person = ["John", 31];
