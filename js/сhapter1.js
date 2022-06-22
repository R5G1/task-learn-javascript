let admin;
let name = 'Джон';
admin = name;
// console.log(admin);

//=========================================================

// let ask = prompt('Ваше имя', '');
// console.log(ask);

//=========================================================

// let ask = prompt('напишите число', 0);
// if (ask > 0) {
//   console.log(1);
// } else if (ask < 0) {
//   console.log(-1);
// } else if (ask == 0) {
//   console.log(0);
// } else {
//   console.log('напишите число');
// }

let result;
// result = a + b < 4 ? 'Мало' : 'Много';

let message;
// login == 'Сотрудник'
//   ? 'Привет'
//   : login == 'Директор'
//   ? 'Здравствуйте'
//   : login == ''
//   ? 'Нет логина'
//   : '';

//=========================================================

// let age = 15;

// if (age >= 14 && age <= 90) {
//   age = 16;
// }
// if (!(age >= 14 && age <= 90)) {
//   age = 17;
// }
// if (age < 14 || age > 90) {
//   age = 18;
// }

// let userlogin = prompt('логин', '');
// if (userlogin == 'Я главный') {
//   console.log('«Здравствуйте!»');
// } else if (password == escape || password == null) {
//   console.log('Отменено');
// }
// else if (userlogin == escape) {
//   console.log('Отменено');
// } else {
//   console.log('«Я вас не знаю».');
// }

//=========================================================

// let i = 0;
// for (i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     // console.log(i);
//   }
// }
// let iw = 0;

// while (iw < 3) {
//   console.log(`number ${iw}!` );
//   iw++;
// }

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// let n = 10;

// stop:
// for (let i = 2; i <= n; i++) {

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue stop;
//   }

//  console.log(i);
// }

//=========================================================

// if (browser === 'Edge') {
//   console.log("You've got the Edge!");
// } else if (browser === 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
//   console.log('Okay we support these browsers too');
// } else {
//   console.log('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//   case 0:
//     console.log("You've got the Edge!");
//     break;

//   case 1:
//     console.log('Okay we support these browsers too');
//     break;
//   case 2:
//   case 3:
//     console.log('Okay we support these browsers too');
//     break;
//   default:
//     console.log('We hope that this page looks ok!');
// }

//=========================================================

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

function min(a,b) {
  return a > b ? a : b;
}

function pow(x,n) {
  return x**n;
}

//=========================================================
