// function toArray(arg: any) {
//   return [arg];
// }

const data = toArray("hello");

function toArrayFromString(arg: string) {
  return [arg];
}

function toArrayFromNumber(arg: number) {
  return [arg];
}

function toArrayFromBoolean(arg: boolean) {
  return [arg];
}

const aString = toArrayFromString("hello");
const aNumber = toArrayFromNumber(1);
const aBoolean = toArrayFromBoolean(true);

function toArray<T>(arg: T): [T] {
  return [arg];
}

const aArray = toArray("hello");
const aArray2 = toArray(1);
const aArray3 = toArray(true);
