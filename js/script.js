
  var userName;
  function greetUser () {
    if (navigator.cookieEnabled)
    userName = readCookie ("irock_username");
    if (userName)
    alert ("Hello" + userName + ", I missed you.");
    else
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
          if (navigator.cookieEnabled)
          writeCookie("irock_username", userName, 5 * 365);
          else
              alert ("Sorry. Cookies aren't supported/enabled in your browser. I won't remember you later.")
            }




          document.getElementById("rockImg").src = "images/rock happy.png";
          setTimeout("document.getElementById('rockImg').src ='images/rock lonely.png';", 60000);

    }

    function resizeRock () {
      document.getElementById('rockImg').height =
        (window.innerHeight - 100) * 0.9;
    }
