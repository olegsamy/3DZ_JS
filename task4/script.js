// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно

const numberA = Number((prompt('Введите первое число')));
const numberB = Number((prompt('Введите второе число')));
console.log(`первое введенное число ${numberA} `);
console.log(`второе введенное число ${numberB} `);
console.log(` `);
const sum = (slog1, slog2) => {
    return slog1 + slog2;
}
const mult = (mnogh1, mnogh2) => {
    return mnogh1 * mnogh2;
}
const diff = (umensh, vychet) => {
    return (umensh >= vychet) ? umensh - vychet : vychet - umensh;
}
const div = (delimoe, delitel) => {
    return (delitel !== 0) ? delimoe / delitel : ' - "на 0 делить нельзя!!!" ';
}


console.log(`сумма двух чисел равна ${sum(numberA, numberB)} `);

console.log(`произведение двух чисел равно ${mult(numberA, numberB)} `);

console.log(`разница между двумя числами составляет ${diff(numberA, numberB)} `);

console.log(`деление двух чисел равно ${div(numberA, numberB)} `);



