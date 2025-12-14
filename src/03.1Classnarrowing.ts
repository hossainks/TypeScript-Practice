class CompanyFounder {
  longSpeech() {
    console.log("It's all started ...");
  }
}

class CompanyCEO {
  longSpeechCEO() {
    console.log("Everything was hard ...");
  }
}

type speechGiver = CompanyFounder | CompanyCEO;

function giveLongSpeech(speaker: speechGiver) {
  if (speaker instanceof CompanyCEO) {
    speaker.longSpeechCEO();
  }
  if (speaker instanceof CompanyFounder) {
    speaker.longSpeech();
  }
}

giveLongSpeech(new CompanyCEO());
