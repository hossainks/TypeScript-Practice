class Project {
  // private name: string;
  protected name: string;
  budget: string;

  constructor(name: string, budget: string) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
    console.log(`The budget of ${this.name} is ${this.budget} `);
  }
}

class SecretProject extends Project {
  secretLevel: 1 | 2 | 3;
  constructor(secretLevel: 1 | 2 | 3) {
    super("Super Secret Project", "$1000000000");
    this.secretLevel = secretLevel;
  }

  override printBudget() {
    console.log(
      `The budget of ${this.name} is ${this.budget} and the secret level is ${this.secretLevel} `
    );
  }
}

const project1 = new Project("Super Project", "$1000000");
console.log(project1);
// project1.name = "Super Project 2";
project1.printBudget();
console.log(project1);
