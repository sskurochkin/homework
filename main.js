'use strict'
let budgetMonth = prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");
let expens = prompt("Введите обязательную статью расходов в этом месяце");
let howCost = prompt("Во сколько обойдется?");
let appData = {
    budget : budgetMonth,
    timeData : date,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
let budgetOfDay = budgetMonth / 30;
alert('Ваш бюджет на месяц составаит - ' + budgetOfDay);
console.log(budgetOfDay);
