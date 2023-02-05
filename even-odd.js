function evenOdd(num) {
    if (num % 2 == 0)
        return true;
    else
        return "odd number";
}

const num = 10;
const res = evenOdd(num);
if (res == true)
    console.log("even number");
else
    console.log(res);
