// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function salaryAfterTax(salary) {
    if (isNaN(salary)) { alert('Вы ввели текст, обновите страницу') }
    else if (salary >= 0) {
        return console.log(`Размер заработной платы за вычетом налогов равен ${salary - salary * 0.13}`)
    }
    else if (salary <= 0) {
        alert('некорректный ввод, обновите страницу');
    }
}

const userSalary = Number((prompt('Введите размер вашей зарплаты')));
salaryAfterTax(userSalary);
