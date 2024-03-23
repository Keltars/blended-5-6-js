// ///**
// // *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// // *? Зробіть знижку 20 % на всі фрукти у масиві
// // *? Надайте ід для кожного продукту
// // */
// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// // function fruitsUpd(arrItems) {
// //   return arrItems.map((fruit, index) => {
// //     return {
// //       ...fruit,
// //       price: fruit.price * 0.8,
// //       id: index + 1,
// //     };
// //   });
// // }

// const fruitsUpd = (arrItems) =>
//   arrItems.map((fruit, index) => ({
//     ...fruit,
//     price: fruit.price * 0.8,
//     id: index + 1,
//   }));

// // fruitsUpd(fruits);
// console.log(fruitsUpd(fruits));

// Напишіть функцію яка приймає масив об'єктів і повертає масив об'єктів у яких лайків більше пьяти

// const filterTweets = (array) => array.filter((item) => item.likes > 5);

// console.log(filterTweets(tweets));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// /**
//  *? Поверніть об'єкт, в якому вказано кількість тегів.
//  *? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
//  */

// const calculateTags = (tweetsArray) => {
//   const tags = tweetsArray.flatMap((item) => item.tags);
//   console.log(tags);
//   return tags.reduce((acc, currValue) => {
//     console.log(acc);
//     return { ...acc, [currValue]: acc[currValue] ? acc[currValue] + 1 : 1 };
//   }, {});
// };

// console.log(calculateTags(tweets));
