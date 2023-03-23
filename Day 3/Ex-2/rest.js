// Demonstration of rest operator

function exa(a,b){
    return a+b;
}

console.log(exa(1,2))
console.log(exa(1,2,3,4,5,6,7,8,9,10))

function newexa(...input){
    let sum = 0;
    for(let i of input){
        sum += i;
    }
    return sum;
}

console.log(newexa(1,2))
console.log(newexa(1,2,3,4,5,6,7,8,9,10))