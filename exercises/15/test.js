const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function implode(arr, symbol, isEven) {
    return arr.reduce((acc, el) => (!isEven === !!(el % 2)) ? [...acc, el] : acc, []).join(symbol)
}


console.log(implode(arr, ':', true)); // '2:4:6:8'
console.log("next")
console.log(implode(arr, '*', false)); // '1*3*5*7*9'