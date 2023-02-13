function discount(num){
    let total=0;
    if(num<=100){
        total=num*100;
    }
    else if(num>100 && num<=200){
        total=10000+(num-100)*90;
    }
    else{
        total=19000+(num-200)*70;
    }
    return total;
}

console.log(discount(500));