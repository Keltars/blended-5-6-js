// //TODO:=============================================
// /**
//  *? Напиши функцію конструктор User для
//  *? створення користувача з такими властивостями:
//  *? a. userName - ім'я, рядок
//  *? b. age - вік, число
//  *? c. numbersOfPost - кількість постів, число
//  *? d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//  *? Додай метод getInfo(), який повертає рядок:
//  *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`
//  */

// const User = function (param) {
//   this.userName = param.userName;
//   this.age = param.age;
//   this.numbersOfPost = param.numbersOfPost;
// };
// User.prototype.getInfo = function () {
//   return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
// };
// const newUser = new User({
//   userName: "Mango",
//   age: 26,
//   numbersOfPost: 39,
// });
// console.log(newUser);
// console.log(newUser.getInfo());

//TODO:=============================================
/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login () {return this.#login};
//   set login (newLogin) {
//     this.#login = newLogin};

//     get email () {return this.#email};
//     set email (newEmail) {
//       this.#email = newEmail};

// }

// const userName = new Client("alona", "a@gmail.com");

// console.log(userName);
// console.log(userName.login);
// console.log(userName.login = "valerij");

// //TODO:=============================================
// /**
//  *? Напиши клас Notes який управляє колекцією нотаток у
//  *? властивості items.
//  *? Нотатка - це об'єкт із властивостями id, text і priority.
//  *? Додай класу статичний метод Priority,
//  *? який буде повертати об'єкт із пріоритетами
// //  {
// //       HIGHT: "hight",
// //       LOW: "low",
// //     }
//  *? Додай методи addNote(note), removeNote(id)
//  *? updatePriority(id, newPriority)
//  */
// class Note {
//   #findIndex(id) {
//     return this.items.findIndex((note) => note.id === id);
//   }
//   static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(id) {
//     const idx = this.#findIndex(id);
//     if (idx !== -1) {
//       this.items.splice(idx, 1);
//     }
//   }

//   updatePriority(id, newPriority) {
//     const idx = this.#findIndex(id);
//     console.log(idx);
//     if (idx !== -1) {
//       this.items[idx].priority = newPriority;
//     }
//   }
// }

// const note1 = new Note();
// note1.addNote({
//   id: 1,
//   text: "Note 1 Text",
//   priority: Note.Priority().LOW,
// });

// note1.addNote({
//   id: 2,
//   text: "Note 1 Text",
//   priority: Note.Priority().LOW,
// });

// note1.updatePriority(1, Note.Priority().HIGHT);
// note1.removeNote(3);

// console.log(note1);
