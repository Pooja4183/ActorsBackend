class CoffeeMachine {
  sugar: number;
  milk: number;
  coffeePowder: number;

  makeLatte = (): string => {
    const cream = 10;
    let mix = this.sugar + this.milk + this.coffeePowder + cream;
    return 'Latte:: ' + mix;
  };

  makeCappuchino = (): string => {
    const cream = 10;
    let mix = this.sugar + this.milk - 100 + this.coffeePowder * 2 + cream;
    return 'Latte:: ' + mix;
  };
}

// class instance
let coffee = new CoffeeMachine();

coffee.coffeePowder = 5;
coffee.milk = 399;
coffee.sugar = 2;
/*Lets prepare Latte */
let latte = coffee.makeLatte();
console.log(latte);

/* Customize my Cappuchino */
coffee.coffeePowder = 6;
coffee.milk = 199;
coffee.sugar = 1;
/* Lets prepare Cappuchino */
let capppu = coffee.makeCappuchino();
console.log(capppu);
