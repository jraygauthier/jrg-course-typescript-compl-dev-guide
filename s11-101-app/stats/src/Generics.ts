/* Silly example:
// NOTHING TO DO WITH GENERICS
const addOne = (a: number): number => {
  return a + 1;
};

const addTwo = (a: number): number => {
  return a + 2;
};

const addThree = (a: number): number => {
  return a + 3;
};

const add = (a: number, b: number): number => {
  return a + b;
};

add(10, 1);
add(10, 2);
add(10, 3);
*/

/* Another silly example:
class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'alsdkfj';
*/

// Much better (however does not compile):

/*
class HoldAnything<TypeOfData> {
  data: TypeOfData;

  add(a: T): T {
    return a;
  }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
holdNumber.add(10);


const holdString = new HoldAnything<string>();
holdString.data = "asdlfkj";
*/
