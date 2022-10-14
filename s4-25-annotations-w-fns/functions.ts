
const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number) => {
  // See here, this function is inferred to have a `void` return type and we do
  // not get an error here explaining we forgot to `return` the result which we
  // would have had if we type annotated the return type.
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};


// Destructuring.
const logWeather = ({ date, weather }: { date: Date, weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

