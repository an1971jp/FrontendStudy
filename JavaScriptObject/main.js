'use strict';

{
  // クラス
  class Post {  // 親クラス
    constructor(text) {
      this.text = text,
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponseredPost extends Post {  // 子クラス
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  const posts = [
    new Post('JavaScript勉強中'),
    new Post('プログラミングが楽しい'),
    new SponseredPost(`3分動画でマスターしよう`, `dotinstall`)
  ];

  posts[2].show();
  posts[2].like();

  //   // 静的メソッド
  //   // thisは使えない
  //   static showInfo() {
  //     console.log('Post class version 1.0');
  //   }

  // const posts = [
  //   new Post('JavaScript勉強中'),
  //   new Post('プログラミングが楽しい')
  // ];

  // // posts[0].like();

  // Post.showInfo();

  // const posts = [
  //   {
  //     text: 'JavaScript勉強中',
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     }
  //   },
  //   {
  //     text: 'プログラミングが楽しい！',
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     }
  //   }
  // ];

  // show(posts[0]);
  // posts[0].show();
  // posts[1].show();


  // // 例外処理
  // // const name = 'taguchi';
  // const name = 5;
  // try {
  //   console.log(name.toUpperCase(name));
  // } catch (e) {
  //   console.log(e);
  // }
  // console.log("Finish!");

  // // setTimeout(処理が終了後に一定時間経ってから実行する)
  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   const timeoutId = setTimeout(showTime, 1000);
  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timeoutId);
  //   }
  // }
  // showTime();

  // // setInterval(処理中であっても一定時間ごとに処理を実行する)
  // let i = 0;

  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // }
  // const intervalId = setInterval(showTime, 1000);


  // // 警告、confirm
  // alert("hello");
  // const answer = confirm("削除しますか？");
  // if (answer === true) {
  //   alert("削除しました")
  // } else {
  //   alert("キャンセルしました");
  // }

  // // 日時の取り扱い
  // const d = new Date();
  // console.log(d.getFullYear());
  // console.log(d.getMonth() + 1);  // JavaScriptでは実際の月-1を取得する
  // console.log(d.getDate());
  // console.log(d.getDay());
  // console.log(d.getHours());
  // console.log(d.getMinutes());
  // console.log(d.getSeconds());
  // console.log(d.getMinutes());

  // const d2 = new Date(2019, 10); // 2019/11/1 00:00:00
  // d2.setHours(10, 20, 30); // 2019/11/1 10:20:30
  // d2.setDate(31); // 2019/12/1 10:20:30
  // d2.setDate(d2.getDate() + 3); // 2019/12/1 10:20:30
  // console.log(d2);

  // // 数値の取り扱い
  // const scores = [10, 3, 9];
  // let sum = 0;

  // scores.forEach((score) => {
  //   sum += score;
  // });
  // const avg = sum / scores.length;
  // console.log(sum);
  // console.log(avg);

  // console.log(Math.floor(avg)); // 7(小数点以下切り捨て)
  // console.log(Math.ceil(avg));  // 8
  // console.log(Math.round(avg)); // ７
  // console.log(avg.toFixed(3)); // 7.333

  // // 乱数
  // console.log(Math.random());
  // console.log(Math.floor(Math.random() * 3)); // 0, 1, 2の乱数
  // const n = 5;
  // console.log(Math.floor(Math.random() * (n + 1))); // 0〜5の乱数
  // const min = 1, max = 10;
  // console.log(Math.floor(Math.random() * (max + 1 - min)) + min); // 1〜10の乱数

  // // サイコロ
  // console.log(Math.floor(Math.random() * 6) + 1); // 1〜6の乱数

  // // 文字列操作
  // const str = "hello";

  // console.log(str.substring(2, 4)); // 部分的な取り出し
  // console.log(str[1]);

  // const d = [2019, 11, 14];
  // // console.log(d.join('/'));
  // // console.log(d.join(''));

  // const t = '17:08:24';
  // // console.log(t.split(':'));

  // const [hour, minute, second] = t.split(':');
  // console.log(hour);
  // console.log(minute);
  // console.log(second);

  // const numbers = [10, 20, 30, 40];

  // // forEach
  // const number = numbers.forEach((number) => {
  //   console.log(number);
  // });


  // const str = "Hello";
  // // console.log(str.length);
  // console.log(str.substring(2, 4));

  // let x = [1, 2];
  // let y = [...x];

  // x[0] = 5;

  // console.log(x);
  // console.log(y);

  // const otherProps = {
  //   r: 4,
  //   color: 'red'
  // }

  // const point = {
  //   x: 100,
  //   y: 180,
  //   ...otherProps
  // };

  // point.x = 120;
  // console.log(point.x);
  // console.log(point['y']);

  // // プロパティ追加
  // point.z = 90;
  // // プロパティ削除
  // delete point.y;
  // console.log(point);

//   const point = {
//     x: 100,
//     y: 180
//   };

//   const points = [
//     {x: 30, y: 20},
//     {x: 10, y: 50},
//     {x: 40, y: 40}
//   ];
//   console.log(points[1].y);

//   const keys = Object.keys(point);
//   keys.forEach(key => {
//     console.log(`Key: ${key} Value: ${point[key]}`);
//   });
// }


// const scores = [80, 90, 40, 70];

// scores.forEach((score) => {
//   console.log(score);
// });

// scores.forEach((score) => {
//   console.log(score);
// });

// const prices = [180, 190, 200];
// // const updatePrices = prices.map(price => price + 20);
// const updatePrices = prices.map((price) => {
//   return price + 20;
// });

// console.log(updatePrices);

// const numbers = [1, 4, 7, 8, 10];
// // const evenNumbers = numbers.filter((number) => {
// //   if (number % 2 === 0) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // });
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// // scores.push(60, 50);
// // scores.shift();
// // scores.splice(1, 1, 40, 50);

// // console.log(`Score: ${scores[0]}`);
// // console.log(`Score: ${scores[1]}`);
// // console.log(`Score: ${scores[2]}`);

// /*
// for (let i = 0; i < scores.length; i++) {
//   // 90, 40, 70, 60, 50
//   console.log(`Score ${i}: ${scores[i]}`);
// }
// */

// /*
// console.log(scores[1]);
// scores[2] = 44;
// console.log(scores);
// console.log(scores.length);

}