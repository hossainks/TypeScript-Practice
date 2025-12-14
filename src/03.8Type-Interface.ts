interface SimpleJob {
  codingLanguage: string;
  sourceControl: string;
}

interface ComplicatedJob extends SimpleJob {
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
}

let completedJob: ComplicatedJob = {
  codingLanguage: "TS",
  sourceControl: "git",
  hasManyMeetings: true,
  reportsToBeCompleted: ["hourly", "daily", "weekly"],
};

interface meetingHolder {
  meetingLength: number;
  holdMeeting: () => void;
}

interface meetingHolder {
  endMeeting: () => void;
}

// class projectManager implements meetingHolder {
//   meetingLength = 60;
//   holdMeeting = () => {
//     console.log("Just a meeting");
//   };
// }

class projectManager implements meetingHolder {
  meetingLength = 60;
  holdMeeting = () => {
    console.log("Just a meeting");
  };
  endMeeting = () => {
    console.log("Meeting is over");
  };
}
