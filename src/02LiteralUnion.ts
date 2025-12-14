type Programmer = "Programmer";
type HR = "HR";

let bestProgrammer: Programmer = "Programmer";

type PositionType = Programmer | HR;

type Position = "Programmer" | "HR" | "CEO";

function getSalaryForPosition(position: Position): number {
  if (position === "Programmer") {
    return 100000;
  }
  if (position === "HR") {
    return 120000;
  }
  console.warn(`We dont have a salary for ${position}`);
  return 0;
}

getSalaryForPosition("Programmer");
getSalaryForPosition("HR");
getSalaryForPosition("CEO");
