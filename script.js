'use strict';

let money = prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let article = prompt('Введите обязательную статью расходов в этом месяце', ''),
        amount = prompt('Во сколько обойдётся?', '');

    appData.expenses[article] = amount;
}

alert('Бюджет на 1 день составляет ' + appData.budget / 30 + ' рублей');