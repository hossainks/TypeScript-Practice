type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplicatedJob = {
  codingLanguage: string;
  sourceControl: string;
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
};

type QaJob = {
  scriptingLanguage: string;
  hasAutomatedTests: true;
};

let simpleJb: SimpleJob = { codingLanguage: "TS", sourceControl: "git" };
let complicatedJob: ComplicatedJob = {
  codingLanguage: "TS",
  sourceControl: "git",
  hasManyMeetings: true,
  reportsToBeCompleted: ["hourly", "daily", "weekly"],
};

let qaJob: QaJob = {
  scriptingLanguage: "Python",
  hasAutomatedTests: true,
};

simpleJb = complicatedJob;
complicatedJob = simpleJb as ComplicatedJob;
complicatedJob = qaJob as unknown as ComplicatedJob;

// same meaning:
complicatedJob = <ComplicatedJob>simpleJb;
complicatedJob = <ComplicatedJob>(<unknown>qaJob);

const complicatedJobMadeInSteps = {} as ComplicatedJob;
complicatedJobMadeInSteps.codingLanguage = "C#";
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = [];
complicatedJobMadeInSteps.sourceControl = "git";
