class MemoryDataBase<T> {
  protected items = Array<T>();

  public additem(item: T) {
    this.items.push(item);
  }

  public getItemByIndex(index: number): T | undefined {
    return this.items[index];
  }

  public listItems() {
    this.items.forEach((item) => console.log(item));
  }
}

const namesDataBase = new MemoryDataBase<string>();
namesDataBase.additem("John");
namesDataBase.getItemByIndex(0);
console.log(namesDataBase);

class MemoryDataBase2<T extends { id: string }> extends MemoryDataBase<T> {
  constructor() {
    super();
  }
  public delete(id: string) {
    const index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
  }
}

const base2 = new MemoryDataBase2<{ id: string }>();
base2.additem({ id: "1" });
const firstItem = base2.getItemByIndex(0);
console.log(firstItem);
base2.delete("1");
console.log(base2);
