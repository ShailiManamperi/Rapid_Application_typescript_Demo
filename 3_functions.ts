//function

function findSum(num1: number,num2: number ):number{
    return num2+num1;
}
function findSum2(num1: number,num2: number ):string{
    return `Sum is ${num2+num1}`;
}

function findTheSum(num1: number | string,num2: number | string) :number{
    if (typeof num1 ==='string' || typeof num2 === 'string'){
        return +num1 + +num2;
    }else {
        return num1 +num2;
    }

}
function findTheSum2(num1: number | string,num2: number | string) :number | string{
    if (typeof num1 ==='string' || typeof num2 === 'string'){
        return +num1 + +num2;
    }else {
        return num1 +num2;
    }

}

let result1 = findSum(10 ,20);
console.log(result1);
let result2 = findSum2(10 ,20);
console.log(result2);

let result3 = findTheSum(100 ,200);
console.log(result3);

let result4 = findTheSum("100" ,20);
console.log(result4);

let result5 = findTheSum("100" ,"20000");
console.log(result5);

