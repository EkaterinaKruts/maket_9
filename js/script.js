function touchRock() {
  var userName = prompt("Как вас зовут?", "Введите ваше имя.");
  if (userName) {
  setTimeout(function(){ alert("Рад вас видеть, " + userName + ".")}, 100);
  document.getElementById("rockImg").src = "images/rock happy.png"}
  setTimeout("document.getElementById('rockImg').src ='images/rock lonely.png';", 60000);

}
