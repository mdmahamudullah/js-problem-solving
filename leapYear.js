function isLeapYear(year) {
    // If year is divisible by 400, it is a leap year
    if (year % 400 == 0)
        return "leap year";
    // Else if year is divisible by 100, it is not a leap year
    else if (year % 100 == 0)
        return "not a leap year";
    // Else if year is divisible by 4, it is a leap year
    else if (year % 4 == 0)
        return "leap year";
    // Else it is not a leap year
    else
        return "not a leap year";
}
const year = 1700;
const res = isLeapYear(year);
console.log(res);

// ............................another way

function isLeapYear1(year) {
    // If year is divisible by 400, it is a leap year
    if (year1 % 4 === 0 && (year1 % 100 !== 0 || year1 % 400 === 0))
    return "it is leap year";
    else
        return "it is not a leap year";
}
const year1 = 1700;
const res1 = isLeapYear1(year1);
console.log(res1);