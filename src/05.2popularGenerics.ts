const names: string[] = ["John", "Jane", "Jack"];
const name2: Array<string> = ["John", "Jane", "Jack"];

type Employee = {
  name: string;
  role: string;
};

async function getEmployee<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  const parsedResult = await response.json();
  return parsedResult;
}

async function wrapper() {
  const employee = await getEmployee<Employee>("https://example.com/employee");
  const firstEmployee = employee[0];
  console.log(firstEmployee);
}
