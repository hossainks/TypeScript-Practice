class Project {
  name: string;
  budget: string;

  constructor(name: string, budget: string) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
    console.log(`The budget of ${this.name} is ${this.budget} `);
  }
}

const project1 = new Project("Super Project", "$1000000");
project1.printBudget();

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

const secretProject = new SecretProject(2);
secretProject.printBudget();
console.log(secretProject);
