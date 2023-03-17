function diff(arr1,arr2) {
    // let was = [];
    // return arr1.concat(arr2).map((el, idx, arr) => {
    //     if (!arr.slice(idx + 1).includes(el) && !was.includes(el)) {
    //         return el
    //     }
    //     was.push(el);
    //
    // });
    let was = [];
    return arr1.concat(arr2).reduce((acc, el, idx, arr) => {
        if (!arr.slice(idx + 1).includes(el) && !was.includes(el)) {
            acc.push(el);
        }
        else{
            was.push(el);
        }
        return acc;
    }, []);
}

const arr1 = [1, 2, 'a'];
const arr2 = [1, 2, 3, 4, 'b'];

console.log(diff(arr1,arr2)) // [a,3,4,b]