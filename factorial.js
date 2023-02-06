// for loop
// function factorial(num) {
//     var fact = 1;
    
//     for (let i = num; i > 0; i--) {
//             fact = fact*i;
//     }
//     return fact;
// }

// const res = factorial(5);
// console.log(res);

// while loop
function factorial(num) {
    var fact = 1;
    let i = num;
    while ( i > 0) {
            fact = fact*i;
             i--;
    }
    return fact;
}

const res = factorial(5);
console.log(res);