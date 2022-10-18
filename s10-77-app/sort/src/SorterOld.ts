export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable ) {
  }

  /* Initial bad approach:
  constructor(public collection: number[] | string | LinkedList) {
  }
  */

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
            this.collection.swap(j, j + 1);
        }
      }
    }
  }

  /* Initial bad approach:
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof LinkedList) {

        }

        if (this.collection instanceof Array) {
          // All of this only works if collection is number[]
          // If collection is an array of numbers.
          if (this.collection[j] > this.collection[j + 1]) {
              const leftHand = this.collection[j];
              this.collection[j] = this.collection[j + 1];
              this.collection[j + 1] = leftHand;
          }

        }

        if (typeof this.collection === 'string') {
          // Only going to work if collection is a string
          // If collection is a string, do this logic instead:
          // ~~~logic to compare and swap characters in a string
        }
      }
    }
  }
  */
}
