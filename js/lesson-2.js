//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "abcde";

// // if (str.startsWith("a")) {
// //   console.log("yes");
// // } else {
// //   console.log("no");
// // }

// str.startsWith("a") ? console.log("yes") : console.log("no");

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.e

// const firstName = "Viktor";
// const lastName = "Stashko";

// const firstNameLength = firstName.length;
// console.log("   firstNameLength:", firstNameLength);

// const lastNameLength = lastName.length;
// console.log("   lastNameLength:", lastNameLength);

// const totalLength = firstName.length + lastName.length;

// // if (firstNameLength > 4 && lastNameLength > 5) {
// //   console.log(totalLength);
// // } else {
// //   console.log("impossible");
// // }

// firstNameLength > 4 && lastNameLength > 5
//   ? console.log(totalLength)
//   : console.log("impossible");

//TODO: 3 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = 120;

// if (ageMaxim >= 0 && ageMaxim <= 16) {
//   console.log("Maxim is a child");
// } else if (ageMaxim >= 17 && ageMaxim <= 60) {
//   console.log("Maxim is an adult");
// } else if (ageMaxim >= 61 && ageMaxim <= 100) {
//   console.log("Maxim is a pensioner");
// } else {
//   console.log("Error");
// }
