// const btn = document.getElementById('btn');
//   btn.addEventListener('click', () => {
//   text.textContent="ボタンをクリックしました";
// })
// function fn() {
//   console.log("ボタンをクリックしました");
// };
//  setTimeout(function(){fn()},2000);

document.getElementById('btn').onclick =function() {
document.getElementById('text').textContent="ボタンをクリックしました";
console.log("ボタンをクリックしました");
};