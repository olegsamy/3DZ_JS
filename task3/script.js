// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
const numberA = Number((prompt('Введите число А')));
const numberB = Number((prompt('Введите число B')));
const numberC = Number((prompt('Введите число C')));
let max = 0;

function maxNumber(chislo1, chislo2, chislo3) {

    (chislo1 >= chislo2 && chislo1 >= chislo3) ?
        max = chislo1 :
        (chislo2 > chislo1 && chislo2 >= chislo3) ?
            max = chislo2 :
            max = chislo3;
    return max;
}
console.log(`Вы ввели следующие три числа: ${numberA}; ${numberB}; ${numberC}`);
console.log(`Максимальное число из трех введенных чисел равняется ${maxNumber(numberA, numberB, numberC)}`);  