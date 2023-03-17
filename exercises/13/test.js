function group(...arr) {
    // return arr
    //     .reduce((acc, el, idx, array) => idx < array[idx].length ?
    //         [...acc, array
    //             .reduce((acc, value, index, theArray) => theArray[index][idx] === undefined ?
    //                 acc :
    //                 [...acc, theArray[index][idx]], [])]
    //         : acc, []);

    let array = [];

    for (let i = 0; i < Math.max(...arr.reduce((acc, el) => [...acc, el.length], [])); i++) {
        array.push(arr.reduce((acc, value, index, theArray) => theArray[index][i] === undefined ?
                        acc :
                        [...acc, theArray[index][i]], []))
    }
    return array
}

console.log(group(['a', 'b'], [1, 2], [true, false]));
console.log(group(['a', 'b',"c"], [1, 2], [true, false],[6,7,8,9,10,11]));
