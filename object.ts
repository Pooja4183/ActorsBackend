// Annotations Around Objects

const person = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 1,
  },

  cars: ['Baleno', 'BMW'],
};

const handleProfile = (profile: {
  name: string;
  age: number;
  coords: { lat: number; long: number };
}): void => {
  console.log(profile.name);
  console.log(profile.age);
  console.log(profile.coords.lat);
  console.log(profile.coords.long);
};

handleProfile(person);

const sayHello = (): number => {
  console.log('Hello');
  return 5;
};

let a = sayHello();

console.log(a);



const ingredients = {
  sugar: 5,
  milk: 250,
  coffeePowder: 2,
};

const makeCoffee = (items: {
  sugar: number;
  milk: number;
  coffeePowder: number;
}): string => {
  const cream = 10;
  let mix = items.sugar + items.milk + items.coffeePowder + cream;
  return 'Latte:: ' + mix;
};

let mug = makeCoffee(ingredients);

console.log(mug);


