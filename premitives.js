function sendSum(num1, num2, name, iswithName) {
    var result = iswithName ? "hi ".concat(name, " ,Sum is ").concat(num1 + num2) : "Sum is ".concat(num1 + num2);
    return result;
}
var result1 = sendSum(10, 20, 'Shaili', true);
console.log(result1);
var result2 = sendSum(10, 20, 'Shaili', false);
console.log(result2);
