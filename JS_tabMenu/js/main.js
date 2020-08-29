'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      // 既存のイベントをキャンセル
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      // クリックされた要素のIDを取得し、それをactiveにする。
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}