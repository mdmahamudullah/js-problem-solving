const phones = [
    {brand: 'Apple',model: 'iPhone SE',price: 399},
    { brand: 'Samsung', model: 'Galaxy S20',price: 799},
    {brand: 'Google',model: 'Pixel 4',price: 699},
    {brand: 'OnePlus',model: '7T Pro',price: 649},
    {brand: 'Motorola',model: 'Moto G8 Power',price: 199},
    { brand: 'Huawei', model: 'P30 Pro',price: 899},
    {brand: 'Xiaomi',model: 'Mi A3',price: 299},
    {brand: 'LG',model: 'G8X',price: 499},
    {brand: 'Sony',model: 'Xperia 10 II',price: 399}
]


let cheapestPhone = phones.reduce((acc, curr) => {
     if (curr.price < acc.price) {
         return curr;
     } else {
         return acc;
     }
}, {price: Infinity});

console.log(cheapestPhone);