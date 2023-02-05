function incToFeet(inches){
    const feet = inches/12;
    return feet;
}

const inches=144;
const feet=incToFeet(inches);
console.log(feet);