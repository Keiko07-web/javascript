const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  console.log('ボタンが押されました')
  document.body.classList.toggle('dark-theme');
// もし（ボタンのテキストが「ダークモードにする」になっているなら
  if (btn.textContent ==='ダークモードにする」')｛
// ボタンのテキストを（ライトモードにする」に変更
btn.textContent ==='ライトモードにする';
// そうでないなら(「ライトモードにする」と表示されているなら
}else{
  //クリックされたときに「ダークモードにする」に戻す
  btn.textContent = 'ダークモードにする';
}
});