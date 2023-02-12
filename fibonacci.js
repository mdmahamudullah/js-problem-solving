function fibonacciSeries(num) {
    let a = 0, b = 1, output = [a, b];
  
    for (let i = 2; i < num; i++) {
      let c = a + b;
      a = b;
      b = c;
      output.push(c);
    }
    //also we can use array index for calculating series
    return output;
  }
  
  console.log(fibonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]