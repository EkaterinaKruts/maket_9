function touchRock() {
  var userName = prompt("Как вас зовут?", "Введите ваше имя.");
  if (userName) {
  alert("Рад вас видеть, " + userName + ".");
  document.getElementById("rockImg").src = "images/rock happy.png"}

}
