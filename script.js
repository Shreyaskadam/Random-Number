function generatenumber() {
    var x = document.getElementById("number")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
  }