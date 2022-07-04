interface Params {
  size: string;
  toppings: string[];
}

interface IPizza {
  size: string;
  addTopping(topping: string): void;
}

class Pizza implements IPizza {
  static Sizes = 5;

  public size: string = 's';
  private toppings: string[] = [];

  constructor({ size, toppings }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  private validateTopping(topping: string) {
    console.log(topping);
  }

  public addTopping(topping: string) {
    console.log(this.validateTopping(topping));
    this.toppings.push(topping);
  }
}

const pizza = new Pizza({ size: 'medium', toppings: ['cheese'] });
console.log(pizza);

// console.log(x)

export {};
