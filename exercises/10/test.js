function uni(arr) {
    return arr.reduce((acc, el, idx) => {
        if (arr.slice(idx + 1).includes(el) && !acc.includes(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
}

const arr1 = [1, 2, 3, 4, 2, 5, 6, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3];

const arr2 = uni(arr1);

console.log(arr2); // [1,2,3]