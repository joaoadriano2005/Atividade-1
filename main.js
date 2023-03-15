function calcular() {
  var km = document.getElementById("input1").value;
  var gas = document.getElementById("input2").value;
  consumo = (km / gas);

  if (consumo > 20) {
    document.getElementById("economico").classList.add("hover");
    document.getElementById("barato").classList.remove("hover");
    document.getElementById("normal").classList.remove("hover");
    document.getElementById("caro").classList.remove("hover");
  } else if (consumo > 12 && consumo <= 20) {
    document.getElementById("economico").classList.remove("hover");
    document.getElementById("barato").classList.add("hover");
    document.getElementById("normal").classList.remove("hover");
    document.getElementById("caro").classList.remove("hover");
  } else if (consumo >= 8 && consumo <= 12) {
    document.getElementById("economico").classList.remove("hover");
    document.getElementById("barato").classList.remove("hover");
    document.getElementById("normal").classList.add("hover");
    document.getElementById("caro").classList.remove("hover");
  } else if (consumo < 8) {
    document.getElementById("economico").classList.remove("hover");
    document.getElementById("barato").classList.remove("hover");
    document.getElementById("normal").classList.remove("hover");
    document.getElementById("caro").classList.add("hover");
  }
}



