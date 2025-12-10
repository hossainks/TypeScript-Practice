type Person = {
  name: string;
};

async function printName(Person: Person) {
  console.log(Person.name);
}

printName({ name: "John" });
