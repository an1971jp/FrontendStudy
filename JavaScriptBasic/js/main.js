'use strict';

// console.log('hel\nlo wor\tld');

/*
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
*/

// console.log(parseInt('hello', 10));

// 比較演算子
/*
const price = 1200;
console.log(price > 1000);
console.log(price < 1000);
console.log(price >= 1000);
console.log(price === 1000);
console.log(price !== 1000);
*/

// if
/*
const score = 75;
if (score >= 80) {
  console.log('Great!');
} else if (score >= 60) {
  console.log('Good!');
} else {
  console.log('So so..');
}
*/

// 条件演算子(読みづらいので注意)
/*
const score = 85;
score >= 80 ? console.log('Great!') : console.log('So so..');
*/

// continue
// let i = 0;

// while (i < 5) {
//   i++;

//   if (i === 3) {
//     continue;
//   }

//   console.log(i);

// }

// アロー関数
// const sum = (a, b, c) => {
//   return a + b + c;
// }
const sum = (a, b, c) => a + b + c;

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

const double = (a) => a * 2;
console.log(double(12));