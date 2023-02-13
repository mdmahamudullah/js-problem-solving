function factorial(i){
    if(i==1)
    return 1;
    return i* factorial(--i);
}
// 5*4*3*2*1
console.log(factorial(5));