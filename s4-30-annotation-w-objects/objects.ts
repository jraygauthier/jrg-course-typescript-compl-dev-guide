const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// Typeing ES2015 destructuring.
const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;
