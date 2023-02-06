function sumArray(num) {
    var sum = 0;
    for (let i = 0; i < num.length; i++) {

        if (num[i] % 2 !== 0) {
            sum = sum + num[i];
            console.log(i, num[i], sum);
        }
        else {

        }
    }
    return sum;
}

const num = [10, 21, 29, 40];
const res = sumArray(num);
console.log(res);