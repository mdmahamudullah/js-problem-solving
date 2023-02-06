

function sumArray(num) {
    var sum=0;
    for (let i=0;i<num.length;i++){
        sum=sum+num[i];
        console.log(i,num[i],sum);

    }
    return sum;
}

const num = [10,20,30,40];
const res = sumArray(num);
console.log(res);