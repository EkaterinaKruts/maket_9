  var userName;
  function greetUser () {
    alert ('Hello, I am your pet, Rock!');
  }

  function touchRock () {

      if (userName) {
          alert("Рад вас видеть, " + userName + ". Спасибо.");
        }
      else {
        userName = prompt ('What is your name?', 'Enter your name here.');
        if (userName)
          alert ('It is good to meet you, ' + userName + '.');
      }

          document.getElementById("rockImg").src = "images/rock happy.png";
          setTimeout("document.getElementById('rockImg').src ='images/rock lonely.png';", 60000);

    }
