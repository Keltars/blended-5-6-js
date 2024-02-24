// /**
// Напишіть програму, яка отримає від користувача
//  число (кількість хвилин) та виведе в консоль
//  рядок у форматі годин та хвилин
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  70 === 01:10
//  */
// const userTime = prompt("Введіть число");

// function calcTime(number) {
//     const hours = String(Math.floor(number / 60)).padStart(2, "0");
//     const minutes = String(number % 60).padStart(2, "0");
//     const stringTime = `${hours}:${minutes}`;
//     return stringTime;
// }

// console.log(calcTime(userTime));

// Створіть змінну з ім'ям "userAge" і присвойте їй значення вашого віку.
//  Напишіть функцію з ім'ям "checkAge", яка приймає один параметр "вік" і перевіряє, чи є цей вік дорослим (більше або дорівнює 18).
//  Функція повинна повертати true, якщо вік дорослий, і false в іншому випадку.Викличте цю функцію, передаючи змінну "userAge", і виведіть результат в консоль.

// const userAge = 23;

// function checkAge(age) {
//   //   return age >= 18;
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkAge(userAge));

/**
 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */

const min = 29;

function isTime(minutes) {
  if (minutes > 0 && minutes <= 15) {
    return "Перша чверть";
  } else if (minutes > 15 && minutes <= 30) {
    return "Дурга чверть";
  } else if (minutes > 30 && minutes <= 45) {
    return "Дурга чверть";
  } else {
    return "Четверта чверть";
  }
}

console.log(isTime(min));
