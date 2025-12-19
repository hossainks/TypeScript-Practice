import { randomBytes } from "crypto";

export type Employee = {
  name: string;
  id: number;
  email: string;
  salary: number;
};

function generateRandomId(): number {
  return parseInt(randomBytes(4).toString("hex"), 16);
}

export function createEmployee(employeeName: string, salary: number): Employee {
  return {
    name: employeeName,
    id: generateRandomId(),
    email: `${employeeName}@coolcompany.com`,
    salary,
  };
}

const Peter = createEmployee("Peter", 10000);
const John = createEmployee("John", 20000);
const Mary = createEmployee("Mary", 30000);

const allEmployees: Employee[] = [Peter, John, Mary];

const sendWelcomsMain = (employee: Employee) => {
  console.log(`To ${employee.email}
               Hello ${employee.name},
               Welcome to the company!
               Your salary is ${employee.salary}
               and your id is ${employee.id}`);
};

allEmployees.forEach((employee) => sendWelcomsMain(employee));
