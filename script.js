function generatenumber() {
    var x = document.getElementById("number")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
  }

  function getRandomInt(min, max) {
    var min = 0;
    var max = 100;
    var x = document.getElementById("number")
    min = Math.ceil(min);
    max = Math.floor(max);
    x.innerHTML = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
