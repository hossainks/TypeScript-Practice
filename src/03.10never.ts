type CEO = "Jeff";
type Founder = "Tim";

type CeoAndFounder = CEO & Founder;

type willNever = string & number;

function neverReturn(): never {
  while (true) {}
}

function doStuff(arg: string | number) {
  if (typeof arg === "string") {
    console.log(arg.toUpperCase());
    return;
  }

  if (typeof arg === "number") {
    console.log(arg.toFixed(2));
    return;
  }
  console.log(arg); // never happen
}

enum Position {
  Programmer = "Programmer",
  HR = "HR",
  CEO = "CEO",
}

type Employee = {
  name: string;
  position: Position;
  salary: number;
};

function payAnnualBonus(emp: Employee) {
  let bonuspercent: number = 0;
  switch (emp.position) {
    case Position.Programmer:
      console.log("Bonus for Programmer");
      bonuspercent = 0.2;
      break;
    case Position.HR:
      console.log("Bonus for HR");
      bonuspercent = 0.1;
      break;
    case Position.CEO:
      console.log("Bonus for CEO");
      bonuspercent = 200;
      break;
    default:
      const remainingValues: never = emp.position;
  }
}
