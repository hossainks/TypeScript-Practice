interface HRManager {
  getAllSalaries(): string[];
}

interface ScrumMaster {
  holdScrumMeeting(): void;
}

class SwitchArmyKnife implements HRManager, ScrumMaster {
  getAllSalaries() {
    return [];
  }
  holdScrumMeeting() {
    console.log(`Army Knife Holding Scrum Meeting`);
  }
}

class Project {
  name: string;
  budget: string;
  scrumMaster: ScrumMaster;

  constructor(name: string, budget: string, scrumMaster: ScrumMaster) {
    this.name = name;
    this.budget = budget;
    this.scrumMaster = scrumMaster;
  }

  holdScrumMeeting() {
    this.scrumMaster.holdScrumMeeting();
  }
}

const supermanager = new SwitchArmyKnife();
const project = new Project("Project 1", "100k", supermanager);

console.log(project);
project.holdScrumMeeting();
