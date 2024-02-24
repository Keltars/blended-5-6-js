/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */
const userTime = prompt("Введіть число");

function calcTime(number) {
    const hours = String(Math.floor(number / 60)).padStart(2, "0");
    const minutes = String(number % 60).padStart(2, "0");
    const stringTime = `${hours}:${minutes}`;
    return stringTime;
}

console.log(calcTime(userTime));
