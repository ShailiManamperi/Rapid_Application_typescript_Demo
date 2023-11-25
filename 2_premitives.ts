function sendSum(num1: number,num2: number ,name: string , iswithName: boolean){
    let result = iswithName ? `hi ${name} ,Sum is ${num1 + num2}` :`Sum is ${num1 + num2}`;
    return result;
}

let result1 = sendSum(10,20,'Shaili',true);
console.log(result1);


let result2 = sendSum(10,20,'Shaili',false);
console.log(result2);