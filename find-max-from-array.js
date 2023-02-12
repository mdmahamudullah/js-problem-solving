//1. Using Math.max(): 

// const array = [10, 5, 15, 20, 4];
// const largestValue = Math.max(array[0],array[2]);
// console.log(largestValue); //Output: 20

//2. Using for Loop: 

const array = [10, 5, 15, 20, 4];
let largestValue = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > largestValue) {
    largestValue = array[i];
  }
}

console.log(largestValue); //Output: 20