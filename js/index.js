// 1) Напишите функцию, который будет выводить сообщение “Hello World” раз в секунду, 
//    но всего 5 раз. После 5 итераций скрипт должен вывести сообщение “Done”, 
//    после чего процесс завершится. При решении данной задачи нельзя вызывать setTimeout.

let count = 0


let intervalId = setInterval(() => {
    if (count < 5) {
        console.log("Hello World");
        count++;
    } else {

        console.log("Done");
        clearInterval(intervalId)
    }

}, 1000);


// 2) Выводим  2 следующих сообщения после соответствующих задержек.

//    Сообщение “Hello after 4 seconds” выводим через 4 секунды.
//    Сообщение “Hello after 8 seconds” выводим через 8 секунд.

//    В решении нужно определить всего одну функцию, содержащую встроенные функции. Это означает, что множество вызовов setTimeout должны будут использовать одну и ту же функцию.

//    Пример вызова:

setTimeout(func1) => Hello after 4 seconds
setTimeout(func1) => Hello after 8 seconds



function msg(message, delay) {
    return () => {
        setTimeout(() => {
            console.log(message);

        }, delay);
    }
}

const func1 = msg("Hello after 4 seconds")
const func2 = msg("Hello after 8 seconds")

setTimeout(func1, 4000);
setTimeout(func2, 8000);



let timeId = setTimeout(() => {
    console.log();
    ("Hello after 4 seconds")

}, 4000);

let timeId2 = setTimeout(() => {
    console.log("Hello after 8 seconds");

}, 8000);



// второй вариант

let timeId = setTimeout(() => {
    console.log("Hello after 4 seconds");
}, 4000);

let timeId2 = setTimeout(() => {
    console.log("Hello after 8 seconds");
}, 8000);



// 3) Пользователь вводит число от 1 до 31, которое присваивается переменной day. 
//    Определите в какую декаду месяца попадает это число: в первую, вторую или третью. 
//    Результат нужно вывести на экран.
//    Используйте конструкцию swith-case.


const day = parseInt(prompt("Введите число от 1 до 31:"));

if (day >= 1 && day <= 31) {
    let decade;

    switch (Math.ceil(day / 10)) {
        case 1:
            decade = "первую";
            break;
        case 2:
            decade = "вторую";
            break;
        case 3:
            decade = "третью";
            break;
        default:
            decade = "неверное значение";
    }

    console.log(`Число ${day} попадает в ${decade} декаду месяца.`);
} else {
    console.log("Неверное значение. Введите число от 1 до 31.");
}