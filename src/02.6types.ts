type Position = "Programmer" | "Designer" | "Tester";
const myposition: Position = "Tester";

type Employee = {
  name: string;
  position: Position;
  salary: number;
  greetBack?: Function;
};

const myColleague: Employee = {
  name: "John",
  position: "Programmer",
  salary: 5000,
};

const myOtherColleague: {
  name: string;
  position: Position;
  salary: number;
  tasks: string[];
} = {
  name: "John",
  position: "Programmer",
  salary: 5000,
  tasks: ["write code", "fix bugs"],
};

const myTalkyColleague: Employee = {
  name: "John",
  position: "Programmer",
  salary: 5000,
  greetBack: () => console.log(`hello from Function expression`),
};

function greetColleague(employee: Employee) {
  console.log(`hello ${employee.name}`);
  if (employee.greetBack) {
    employee.greetBack();
  }
}

greetColleague(myTalkyColleague);
greetColleague(myOtherColleague);
