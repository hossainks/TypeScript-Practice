type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplicatedJob = SimpleJob & {
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
};

let completedJob: ComplicatedJob = {
  codingLanguage: "TS",
  sourceControl: "git",
  hasManyMeetings: true,
  reportsToBeCompleted: ["hourly", "daily", "weekly"],
};

type meetingHolder = {
  meetingLength: number;
  holdMeeting: () => void;
};

class projectManager implements meetingHolder {
  meetingLength = 60;
  holdMeeting = () => {
    console.log("Just a meeting");
  };
}
