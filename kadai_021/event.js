const changebtn = document.getElementById("btn");

const changetext = document.getElementById("text");

changebtn.addEventListener("click", () => {
  setTimeout(() => {
  changetext.innerHTML = "ボタンをクリックしました"  
  }, 2000);
});