'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let start = function() {
    do{
        money = prompt('Ваш месячный доход?'); 
    }
    while (!isNumber(money)) {
    }
};
start();

let income = 'Фриланс'; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?'); 
let mission = 100000; //любое число (Какую сумму хотите накопить)
let period =  0;



let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//расходы

let expenses1, expenses2;

let getExpensesMonth = function() {

    let sum = 0;

    for (let i = 0; i < 2; i++){
        if (i === 0){
            expenses1 = prompt('Введите обязательную статью расходов');
        }
        if (i === 1){
            expenses2 = prompt('Введите обязательную статью расходов');
        }
        
        sum += +prompt('Во сколько это обойдется?');

        // Проверка на неверные значения
        while(!isNumber(sum)){
            sum = +prompt('Во сколько это обойдется?');
            console.log('summa: ', sum);
        }
    }  

    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц ' + expensesAmount + ' рублей');

console.log(addExpenses.toLowerCase().split(' '));

//остаток
function getAccumulatedMonth(c, d) {
    const dif = c - d;
    return dif;
};
getAccumulatedMonth(money, expensesAmount);
// присвоение имени переменной
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

// за какой перио будет достигнута цель
const getTargetMonth = function () {
    period = Math.ceil(mission / accumulatedMonth);

    // if (period > 0) {
    //     return console.log('Цель будет достигнута за: ' + period + ' месяцев!');
    // } else {
    //     return console.log('Цель не будет достигнута');
    // }
    return period > 0 ? console.log('Цель будет достигнута за: ' + period + ' месяцев!'): console.log('Цель не будет достигнута');
};
getTargetMonth();

let budgetDay = Math.floor(accumulatedMonth / 30);

console.log('Бюджет на день ' + budgetDay + ' рублей');

let getStatusIncome = function () {
    if (budgetDay > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (600 < budgetDay){ 
        console.log('У вас средний уровень дохода');
    } else if (0 < budgetDay) {
        console.log('У вас средний уровень дохода');
    } else if (0 > budgetDay) {
        console.log('Что то пошло не так');
    }
};

getStatusIncome();
