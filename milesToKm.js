function milesToKm(miles){
    const km = miles*1.60934;
    return km;
}

const miles=10;
const km=milesToKm(miles);
console.log(km);