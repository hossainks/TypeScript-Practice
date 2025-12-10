let queryResulys: any = 5;
queryResulys = "5";

function getSlareyFromService(employeeID: number): unknown {
  return JSON.parse("5");
}

let salary = getSlareyFromService(1);

if (typeof salary === "string") {
  salary = parseInt(salary);
}
if (typeof salary === "number") {
  salary = Math.round(salary);
}

if (typeof salary === "number" || typeof salary === "string") {
  console.log(salary.toString());
  console.log(salary.valueOf());
}

if (
  salary &&
  typeof salary === "object" &&
  "history" in salary &&
  Array.isArray(salary.history)
) {
  salary.history.push(12000);
}
