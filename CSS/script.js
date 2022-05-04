const numbers = [1, 2, 3, 4, 5]
let maximum = -Infinity
let minimum = Infinity

for(let number of numbers){
    if(number>maximum)
    maximum= number;
if (number< minimum)
minimum = number;
}
console.log(maximum)
console.log(minimum)