// interface Vehicle {
// We can now generalize the type:
interface Reportable {
  // name: string;
  // // year: number;
  // year: Date;
  // broken: boolean;
  // No need to specify the above properties.
  summary(): string;
};

const oldCivic = {
  name: 'civic',
  // year: 2000,
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean}): void => {
// Better, using an interface:
const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
