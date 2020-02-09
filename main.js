'use strict'

let budgetMonth = prompt("Ваш бюджет на месяц?", ''),
    date = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget : budgetMonth,
    timeData : date,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert('Ваш бюджет на месяц составаит - ' + appData.budget / 30);

console.log(budgetOfDay);
