function navegador() {
  var x = document.getElementById("cabeza");
  if (x.className === "listonA") {
    x.className += " responsivo";
  } else {
    x.className = "listonA";
  }
}