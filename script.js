function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// тут текст мав бути, але лінь
var result = fibonacci(10);
console.log(result); // 55

function filter(array, handler) {
    // Перевірка вхідних параметрів
    if (!Array.isArray(array) || typeof handler !== 'function') {
        throw new Error('Невірний формат вхідних даних');
    }

    // Результат фільтрації
    const result = [];

    // Викликhandler
    for (let i = 0; i < array.length; i++) {
        if (handler(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

// Приклад функції filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Фільтрація парни
const evenNumbers = filter(numbers, function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // Виведе [2, 4, 6, 8, 10]

function pow(base, exponent) {
    // Перевірка на валідність
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new Error('Вхідні параметри повинні бути числами');
    }

    // Обробка випадку, коли ступінь = 0
    if (exponent === 0) {
        return 1;
    }

    // Обробка випадку, коли ступінь < 0
    if (exponent < 0) {
        return 1 / pow(base, -exponent);
    }

    // Обчислення результату
    return base * pow(base, exponent - 1);
}

// Приклад використання pow
const result = pow(2, 3); // Підносимо 2 до ступеня 3
console.log(result); // 8

function powList(numbers, exponent) {
    // Перевірка на валідність вхідних параметрів
    if (!Array.isArray(numbers) || typeof exponent !== 'number') {
        throw new Error('Невірний формат вхідних даних');
    }

    // Використання методу map для обчислення pow для кожного елемента масиву
    const result = numbers.map(function (num) {
        return pow(num, exponent);
    });

    return result;
}

// Приклад використання функції powList
const numbers = [2, 3, 4];
const exponent = 2;

const resultArray = powList(numbers, exponent);
console.log(resultArray); // Виведе [4, 9, 16]

// Функція filter з завдання 5
function filter(array, handler) {
    if (!Array.isArray(array) || typeof handler !== 'function') {
        throw new Error('Невірний формат вхідних даних');
    }

    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (handler(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

// Функція pow з завдання 4
function pow(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new Error('Вхідні параметри повинні бути числами');
    }

    if (exponent === 0) {
        return 1;
    }

    if (exponent < 0) {
        return 1 / pow(base, -exponent);
    }

    return base * pow(base, exponent - 1);
}

// Функція powAndFilter
function powAndFilter(numbers, exponent, minValue) {
    if (!Array.isArray(numbers) || typeof exponent !== 'number' || typeof minValue !== 'number') {
        throw new Error('Невірний формат вхідних даних');
    }

    // Використання функції pow для підняття чисел до ступеня
    const poweredNumbers = numbers.map(function (num) {
        return pow(num, exponent);
    });

    // Використання функції filter для відфільтрування чисел менше minValue
    const result = filter(poweredNumbers, function (num) {
        return num >= minValue;
    });

    return result;
}

// Приклад використання функції powAndFilter
const numbers = [2, 3, 4];
const exponent = 2;
const minValue = 5;

const resultArray = powAndFilter(numbers, exponent, minValue);
console.log(resultArray); // Виведе [9, 16]


function sum(handler) {
    // Перевірка на валідність вхідних параметрів
    if (typeof handler !== 'function') {
        throw new Error('Невірний формат вхідних даних');
    }

    // Функція calc, яка обчислює суму чисел
    function calc() {
        // Виклик функції handler і отримання масиву чисел
        const numbers = handler();

        // Використання методу reduce для обчислення суми
        const sumResult = numbers.reduce(function (acc, num) {
            return acc + num;
        }, 0);

        return sumResult;
    }

    return calc;
}

// Приклад використання функції sum та calc
const handlerExample = function () {
    return [1, 2, 3, 4, 5];
};

const calcFunction = sum(handlerExample);
const result = calcFunction();

console.log(result); // Виведе суму чисел [1, 2, 3, 4, 5], тобто 15
