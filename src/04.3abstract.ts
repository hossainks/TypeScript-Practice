abstract class Project {
  constructor(public name: string, public budget: string) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
    console.log(`The budget of ${this.name} is ${this.budget} `);
  }

  abstract makeDelivery(): void;
}

class SecretProject extends Project {
  secretLevel: 1 | 2 | 3;
  constructor(secretLevel: 1 | 2 | 3) {
    super("Super Secret Project", "$1000000000");
    this.secretLevel = secretLevel;
  }
  override makeDelivery() {
    console.log("Delivery made");
  }

  override printBudget() {
    console.log(
      `The budget of ${this.name} is ${this.budget} and the secret level is ${this.secretLevel} `
    );
  }
}
