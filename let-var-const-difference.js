
// let:
// let is used to define a variable that is limited in scope to the block, statement or expression on which it is used. 

// Example:
// let x = 10;
// if (x > 5) {
//   let y = 6;
//   console.log(y);
  
// }
// console.log(y); 
 //6
//Error: y is not defined

// var:
// var is used to define a variable that is accessible anywhere within the scope that it is declared. 

// Example:

// var x = 10;
// if (x > 5) {
//   var y = 6;
//   console.log(y);
// }
// console.log(y); 
//6
//6

// // const:
// // const is used to define a variable that is not allowed to be reassigned. 

// // Example:
const x = 10;
if (x > 5) {
  const y = 6;
  const z = 7;
  console.log(y); 
  console.log(z); 
//   y = 8;
// x=8;
  
}
z = 8;
console.log(z); 

//6 
// //Error: Assignment to constant variable