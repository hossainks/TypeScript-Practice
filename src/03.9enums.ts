enum Position {
  Programmer,
  HR,
  /*
   * Must receive at least 200% yearly bonus
   */
  CEO,
}

type Employee = {
  name: string;
  position: Position;
  salary: number;
  greetBack?: Function;
};

function payBonus(emp: Employee): void {
  if (emp.position === 2) {
    console.log("Bonus for Programmer");
  }
}

function payBonus2(emp: Employee): void {
  if (emp.position === Position.CEO) {
    console.log("Bonus for Programmer");
  }
}

enum Positions {
  Programmer = "Programmer",
  HR = "HR",
  CEO = "CEO",
}

type PositionType = "Programmer" | "HR" | "CEO";

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
  }
}
