export {};
const arr: string[] = ["new idea"];

arr.push("Another idea");
arr.map((idea) => console.log(idea.toUpperCase()));

const touples: [string, number] = ["John", 30];
touples.push("John", 31);

console.log(touples);
