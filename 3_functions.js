//function
function findSum(num1, num2) {
    return num2 + num1;
}
function findSum2(num1, num2) {
    return "Sum is ".concat(num2 + num1);
}
function findTheSum(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return +num1 + +num2;
    }
    else {
        return num1 + num2;
    }
}
function findTheSum2(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return +num1 + +num2;
    }
    else {
        return num1 + num2;
    }
}
var result1 = findSum(10, 20);
console.log(result1);
var result2 = findSum2(10, 20);
console.log(result2);
var result3 = findTheSum(100, 200);
console.log(result3);
var result4 = findTheSum("100", 20);
console.log(result4);
var result5 = findTheSum("100", "20000");
console.log(result5);
