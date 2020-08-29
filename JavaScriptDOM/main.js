`use strict`;
{
  // function update() {
    // document.querySelector('h1').textContent = 'あああ';
    // document.getElementById("target").textContent = "あああ";
    // document.querySelectorAll("p")[1].textContent = "あああ";
    // document.querySelectorAll("p").forEach((p, index) => {
    //   p.textContent = `${index}番目のpです。`;
    // });
  // }
  // setTimeout(update, 1000);

  // document.getElementById("target").textContent = "Changed!";

  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');
  //   targetNode.textContent = 'Changed!';
  //   targetNode.title = 'This is title.';
  //   targetNode.style.backgroundColor = 'red';
  // });

  // クリックするとスタイルの変更
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');

    // targetNode.className = "my-color my-border";
    // targetNode.classList.add('my-color');
    // if (targetNode.classList.contains('my-color') === true) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // }
    // targetNode.classList.toggle('my-color');
  // });

  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');

  //   // targetNode.textContent = "dotinstall";
  //   targetNode.textContent = targetNode.dataset.translation;
  // });

  // // 要素の追加
  // document.querySelector('button').addEventListener('click', () => {
  //   const item2 = document.createElement('li');
  //   item2.textContent = 'item 2';

  //   const ul = document.querySelector("ul");
  //   ul.appendChild(item2);

  // });

  // 要素の挿入
  // document.querySelector('button').addEventListener('click', () => {
  //   const item0 = document.querySelectorAll('li')[0];
  //   const copy = item0.cloneNode(true);

  //   const ul = document.querySelector('ul');
  //   const item2 = document.querySelectorAll('li')[2];
  //   ul.insertBefore(copy, item2);
  // });

  // 要素の削除
  // document.querySelector('button').addEventListener('click', () => {
  //   const item1 = document.querySelectorAll('li')[1];
  //   // item1.remove();

  //   const ul = document.querySelector('ul');
  //   ul.removeChild(item1);
  // });

  // // input要素の操作
  // document.querySelector('button').addEventListener('click', () => {
  //   const li = document.createElement('li');
  //   const text = document.querySelector('input');
  //   li.textContent = text.value;
  //   document.querySelector('ul').appendChild(li);

  //   text.value = '';
  //   text.focus();
  // });

  // // セレクトボックスの操作
  // document.querySelector('button').addEventListener('click', () => {
  //   const li = document.createElement('li');
  //   const color = document.querySelector('select');
  //   li.textContent = `${color.value} - ${color.selectedIndex}`;
  //   document.querySelector('ul').appendChild(li);
  // });

  // 試しにh1を操作
  // const h1 = document.querySelector('h1');
  // h1.addEventListener('click', () => {
  //   h1.textContent = 'aaa';
  // });

  // ラジオボタンの操作
  // document.querySelector('button').addEventListener('click', () => {
  //   const colors = document.querySelectorAll('input');
  //   let selectedColor;
  //   colors.forEach(color => {
  //     if (color.checked === true) {
  //       selectedColor = color.value;
  //     }
  //   });
  //   const li = document.createElement('li');
  //   li.textContent = selectedColor;
  //   document.querySelector('ul').appendChild(li);
  // });

  // // チェックボックスの操作
  // document.querySelector('button').addEventListener('click', () => {
  //   const colors = document.querySelectorAll('input');
  //   const selectedColors = [];
  //   colors.forEach(color => {
  //     if (color.checked === true) {
  //       selectedColors.push(color.value);
  //     }
  //   });
  //   const li = document.createElement('li');
  //   li.textContent = selectedColors.join(',');
  //   document.querySelector('ul').appendChild(li);
  // });

  // // 各種イベント
  // document.querySelector('button').addEventListener('dblclick', () => {
  //   console.log('Double Click!');
  // });

  // document.addEventListener('mousemove', e => {
  //   // console.log('Moved!');
  //   console.log(e.clientX, e.clientY);
  // });

  // document.addEventListener('keydown', e => {
  //   console.log(e.key);
  // });

  const text = document.querySelector('textarea');

  // text.addEventListener('focus', () => {
  //   console.log('Focus!');
  // });

  // text.addEventListener('blur', () => {
  //   console.log('Blur!');
  // });

  // text.addEventListener('input', () => {
  //   console.log('Input!');
  //   console.log(text.value.length);
  // });

  // text.addEventListener('change', () => {
  //   console.log('Changed!');
  // });

  // document.querySelector('form').addEventListener('submit', e => {
  //   e.preventDefault();
  //   console.log('submit!');
  // });

  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });

}