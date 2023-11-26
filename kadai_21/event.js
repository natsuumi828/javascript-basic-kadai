function textContent(){
  document.getElementById('text').textContent = 'ボタンをクリックしました';
}

document.getElementById('btn').addEventListener('click',textContent)

function textContent(){
  setTimeout ( function(){
   document.getElementById('text').textContent ='ボタンをクリックしました';
  },2000); 
}

document.getElementById('btn').addEventListener('click',textContent)

