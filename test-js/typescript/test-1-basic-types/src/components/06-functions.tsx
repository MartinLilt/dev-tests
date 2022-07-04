interface IAddFn {
  (a: number, b: number): number;
}

type AddFn = (a: number, b: number) => number;
type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;
type LogFn = (m: string) => void;

const AddExpression: IAddFn = function (x, y) {
  return x + y;
};

const res: number = AddExpression(2, 3);

const fn: Fn = (a: number, b: number, c: number, ...restParams: number[]) => {
  return 5;
};

fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const log: LogFn = (message: string) => {};

enum PizzaSize {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  logSize?(): void;
  getSize(): string;
  addTopping(toppings: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ['sause', 'mushrooms'],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(toppings) {
    this.toppings.push(toppings);
  },
};

console.log(res, log, pizza);

export {};
