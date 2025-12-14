type Founder =
  | {
      name: "John Founder";
      car: "Audi";
    }
  | {
      name: "Mary Founder";
      bike: "Wheels";
    };

function meetTheFounder(founder: Founder) {
  console.log(`meet the founder ${founder.name}`);
  if (founder.name === "John Founder") {
    console.log(`he drives a ${founder.car}`);
  }
  if (founder.name === "Mary Founder") {
    console.log(`she rides a ${founder.bike}`);
  }
}

meetTheFounder({ name: "John Founder", car: "Audi" });

type salary = {
  amount: number;
};

function isSalary(arg: any): arg is salary {
  return "amount" in arg && typeof arg.amount === "number";
}

function paySalary(arg: unknown) {
  if (isSalary(arg)) {
    console.log(`salary is ${arg.amount}`);
  }
}
