function rnd(arr) {
    return arr.reduce((acc, el) => {
        let random = Math.floor(Math.random() * arr.length);
        while (acc[random]) {
            random = Math.floor(Math.random() * arr.length);
        }
        acc[random] = el;
        return acc;
    }, []);
}

console.log(rnd([1, 2, 3, 4, 5, 6])); // [6,1,5,4,3,2]