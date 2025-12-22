import { Interface } from "readline";

type DoubleArray<T, R> = {
  array1: Array<T>;
  array2: Array<R>;
};

interface DoubleArray2<T, R> {
  array1: Array<T>;
  array2: Array<R>;
}

type Programmer = {};
type Manager = {};

const employees: DoubleArray<Programmer, Manager> = {
  array1: [{}],
  array2: [{}],
};

interface iMemoryDataBase<T> {
  additem(item: T): void;
  getItemByIndex(index: number): T | undefined;
  listItems(): T[];
}
