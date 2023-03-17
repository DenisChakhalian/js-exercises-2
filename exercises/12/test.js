console.log(
    [1, 4, 3, 0, 4, 5, 4].reduce((acc, el) => el % 2 ? acc : acc + Math.sqrt(el), 0)
// тут ваш код
) // 6