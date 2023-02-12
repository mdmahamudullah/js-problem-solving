
//swap variable
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a); //10
console.log(b); //5

//swap without temp
let x = 20;
let y = 30;

x = x + y;
y = x - y;
x = x - y;

console.log(x); //30
console.log(y); //20

//destructing
let array = [1, 2, 3, 4];
[first, second] = array;
console.log(first); //1
console.log(second); //2
//destructing-swap
[first, second]=[second,first];
console.log(first); //1
console.log(second); //2

[x, y]=[y,x];
console.log(x); //20
console.log(y); //30


