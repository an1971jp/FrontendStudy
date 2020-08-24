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

  // セレクトボックスの操作
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    document.querySelector('ul').appendChild(li);
  });


}