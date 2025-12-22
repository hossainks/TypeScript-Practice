type objectWithTeam = {
  team: string;
};

type Programmer = objectWithTeam & {
  name: string;
  language: string;
};

function updateTeam<T extends objectWithTeam>(arg: T, newTeam: string): T {
  arg.team = newTeam;
  return arg;
}

let empl1: Programmer = {
  name: "John",
  language: "C#",
  team: "CoolTeam",
};

type OldSchoolProgrammer<T extends "Basic" | "C#"> = {
  language: string;
  name: string;
};

const myCoolColleague: OldSchoolProgrammer<"C#"> = {
  language: "C#",
  name: "John",
};
