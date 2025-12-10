function greet(name: string) {
  return `hello ${name}`;
}

let johnGreet = greet("John");
console.log(johnGreet);

function greetToUppercase(name: string) {
  return `HELLO ${name.toUpperCase()}`;
}

function consoleGreetJohn(name = "John") {
  console.log(`hello there ${name}`);
}

console.log(consoleGreetJohn());
console.log(consoleGreetJohn("tim"));

const greetArrow = (name: string) => `hello ${name}`;

console.log(greetArrow("Mike"));

function greetMultiple(...names: string[]) {
  names.map((name) => {
    consoleGreetJohn(name);
  });
}

greetMultiple("Jim", "Tim");
