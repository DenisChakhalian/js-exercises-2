const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

function fn(arr) {
    let maxProp = 0;
    let currentProp = 0;
    return arr.reduce((acc, el, _, array) => {
        currentProp = array.reduce((acc, element) => element === el ? acc + 1 : acc, 0)
        if (maxProp <= currentProp) {
            maxProp = currentProp;
            acc = el;
        }
        return acc;
    });
}

console.log(fn(arr)); // 'z'