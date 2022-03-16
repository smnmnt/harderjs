let num = 266219
num = String(num)
let numLength = (num.length)
let result = 0
let arr = num.split("")

for (let i = 0; i < numLength; i++)
  result += Number(num[i])

console.log(arr);
console.log(result);