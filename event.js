const dialog = document.getElementById("dialog");
const openBtn2 = document.getElementById("open");2

openBtn.addEventListener("click", function () {
  dialog.showModal();  // ダイアログ2を開く
});

function closeDialog(){
  dialog.close(); // ダイアログを閉じる
}
