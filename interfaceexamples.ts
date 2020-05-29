interface Ingredient {
  sugar: number;
  milk: number;
  coffeePowder: number;
}

const createCoffee = (items: Ingredient): string => {
  const cream = 10;
  let mix = items.sugar + items.milk + items.coffeePowder + cream;
  return 'Latte:: ' + mix;
};

const ing : Ingredient = {
  sugar: 100,
  milk: 500,
  coffeePowder: 3
};

let myCoffee = createCoffee(ing);

console.log(myCoffee);
