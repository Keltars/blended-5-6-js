//TODO:=============================================
/**
 *? Напиши функцію конструктор User для
 *? створення користувача з такими властивостями:
 *? a. userName - ім'я, рядок
 *? b. age - вік, число
 *? c. numbersOfPost - кількість постів, число
 *? d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
 *? Додай метод getInfo(), який повертає рядок:
 *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`
 */

const User = function (param) {
  this.userName = param.userName;
  this.age = param.age;
  this.numbersOfPost = param.numbersOfPost;
};
User.prototype.getInfo = function () {
  return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
};
const newUser = new User({
  userName: "Mango",
  age: 26,
  numbersOfPost: 39,
});
console.log(newUser);
console.log(newUser.getInfo());
