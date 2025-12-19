type Person = {
  name: string;
};

async function printName(person: Person) {
  console.log(person.name);
}

printName({ name: "John" });
