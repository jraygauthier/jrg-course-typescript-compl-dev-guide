const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// No, do not use an array
// const pepsi = ['brown', true, 40];


// Instead, use a tuple:
// const pepsi: [string, boolean, number] = ['brown', true, 40];
// Even better, using a type alias:
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
// Would yield an error:
// pepsi[0] = 40;
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
