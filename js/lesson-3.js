///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

// function fruitsUpd(arrItems) {
//   return arrItems.map((fruit, index) => {
//     return {
//       ...fruit,
//       price: fruit.price * 0.8,
//       id: index + 1,
//     };
//   });
// }

const fruitsUpd = (arrItems) =>
  arrItems.map((fruit, index) => ({
    ...fruit,
    price: fruit.price * 0.8,
    id: index + 1,
  }));

// fruitsUpd(fruits);
console.log(fruitsUpd(fruits));
