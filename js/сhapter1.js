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

function min(a, b) {
  return a > b ? a : b;
}

function pow(x, n) {
  return x ** n;
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Вы согласны?",
//   () => console.log("Вы согласились."),
//   () =>console.log("Вы отменили выполнение.")
// );

//=========================================================

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function calc(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}
// console.log(calc(salaries));

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  // console.log(obj);
}

// console.log(multiplyNumeric(menu));

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
};
// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

function Calculator() {
  this.read = function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

// let calculatorNew = new Calculator();
// calculator.read();

// console.log('sum=' + calculator.sum());
// console.log('num=' + calculator.mul());

//? Типы данных =========================================================

// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");

// console.log( a + b );

function readNumber() {
  let a;
  do {
    a = prompt('Введите число', 0);
  } while (!isFinite(a));

  if (a === null || a === '') return null;

  return +a;
}

// console.log(readNumber());

function random(min, max) {
  return min + Math.random() * (max - min);
}
// console.log(random(1, 5));

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// console.log(randomInteger(1, 3));

function ucFirst(str) {
  let string = str[0].toUpperCase();
  return string + str.slice(1);
}
// console.log(ucFirst('вася'));

function checkSpam(str) {
  let string = str.toLowerCase();

  return string.includes('viagra') || string.includes('xxx');
}

// console.log(checkSpam('buy ViAgRA now'));

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

function extractCurrencyValue(str) {
  return +str.slice(1);
}
// console.log(extractCurrencyValue('в10'))

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

styles[1] = 'Классика';

// console.log(styles.shift());

styles.unshift('Рэп', 'Регги');
// console.log(styles);

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt('число', 0);

    if (value === '' || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// console.log(sumInput());

function getMaxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

// console.log( getMaxSubSum([-1, 2, 3, -9]) );

function camelize(str) {
  if (str.includes('-') == true) {
    let strin = str.split('');
    console.log(strin);
    for (let i = -1; i < strin.indexOf('-'); i++) {
      strin.splice(
        strin.indexOf('-'),
        2,
        strin[strin.indexOf('-') + 1].toUpperCase()
      );
      console.log(strin);
    }
    let strj = strin.join('');
    console.log(strj);
    return strj;
  }
}

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

// console.log(filtered);

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

// console.log( arr );

let arr3 = ['HTML', 'JavaScript', 'CSS'];
function copySorted(arr3) {
  return arr3.slice().sort();
}

let sorted = copySorted(arr3);

// console.log( sorted );
// console.log( arr3 );

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

//================================================================

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

// console.log(names);

let usersMap = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}

// sortByAge(users);

let arr4 = [1, 2, 3];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// console.log(arr4);

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// console.log(getAverageAge(users) );

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

// console.log(unique(strings));

// Map и Set =============================================================================

function unique(arr) {
  return Array.from(new Set(arr));
}

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('');
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr5 = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// console.log(aclean(arr5));

let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys());

keys.push('more');

// console.log(keys);

// Object.keys =============================================================================

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salariesA = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// console.log(sumSalaries(salariesA));

function count(obj) {
  return Object.keys(obj).length;
}

// Date and time =============================================================================

let d = new Date(2012, 1, 20, 3, 12);
// console.log( d );

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3);
// console.log( getWeekDay(date) );

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let dateGet = new Date(2015, 0, 2);

// console.log(getDateAgo(dateGet, 1));

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

// JSON.stringify =============================================================================

let user = {
  name: 'Василий Иванович',
  age: 35,
};

let user2 = JSON.parse(JSON.stringify(user));

let room = {
  number: 23,
};

let meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != '' && value == meetup ? undefined : value;
//   })
// );

// Recursion and stack =============================================================================

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumTo(100));

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

// console.log(sumTo(100));

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumTo(100));

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

// console.log(factorial(5));

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// console.log(fib(3));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

// printList(list);

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// printReverseList(list);

// Closure =============================================================================

function sum(a) {
  return function (b) {
    return a + b;
  };
}

// console.log(sum(1)(2));

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arrB = [1, 2, 3, 4, 5, 6, 7];
// console.log(arrB.filter(inArray([1, 2, 10])));

let usersB = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

// usersB.sort(byField('name'));
// usersB.forEach((userB) => console.log(userB.name));

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      console.log(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

// let army = makeArmy();

// army[0]();

// Function object, NFE =============================================================================

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

// console.log(sum(1)(2));

// setTimeout and setInterval =============================================================================

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// printNumbers(5, 10);

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// printNumbers(5, 10);

// Decorators and redirectors =============================================================================

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

// let f1000 = delay(console.log, 1000);

// f1000('test');

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// Context anchoring  =============================================================================

function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let userAsk = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

// askPassword(userAsk.loginOk.bind(user), userAsk.loginFail.bind(user));

// Prototype  =============================================================================

function testPrototype1() {
  let head = {
    glasses: 1,
  };

  let table = {
    pen: 3,
    __proto__: head,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };

  let pockets = {
    money: 2000,
    __proto__: bed,
  };

  console.log(pockets.pen);
  console.log(bed.glasses);
  console.log(table.money);
}
// testPrototype()

function testPrototype2() {
  let hamster = {
    stomach: [],

    eat(food) {
      this.stomach.push(food);
    },
  };

  let speedy = {
    __proto__: hamster,
    stomach: [],
  };

  let lazy = {
    __proto__: hamster,
    stomach: [],
  };

  speedy.eat('apple');
  console.log(speedy.stomach);

  console.log(lazy.stomach);
}

// testPrototype2()

function testPrototype3() {
  Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
  };

  function f() {
    console.log('Hello!');
  }

  f.defer(1000);
}
// testPrototype3()

function testPrototype4() {
  Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
      setTimeout(() => f.apply(this, args), ms);
    };
  };

  function f(a, b) {
    console.log(a + b);
  }

  f.defer(1000)(1, 2);
}
// testPrototype4()

function testPrototype5() {
  let dictionary = Object.create(null, {
    toString: {
      value() {
        return Object.keys(this).join();
      },
    },
  });

  dictionary.apple = 'Apple';
  dictionary.__proto__ = 'test';

  for (let key in dictionary) {
    console.log(key);
  }

  console.log(dictionary);
}
// testPrototype5()