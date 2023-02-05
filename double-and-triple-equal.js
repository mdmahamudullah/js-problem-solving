
// The "==" operator is an "equal operator" which is used to compare the values of two operands and returns true if both of them have the same value.

// Example:

var x = 10;
var y = "10";
if(x == y){
  console.log("x is equal to y");
}

// The "===" operator is a "strict equal operator" which is used to compare both the value and the type of the operands.

// Example:

var x = 10;
var y = "10";
if(x === y){
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}