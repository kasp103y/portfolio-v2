const bogino = document.querySelector("#bogino");
const musikloft = document.querySelector("#musik");
const cosmic = document.querySelector("#cosmic");
const ub = document.querySelector("#ub");
const grob = document.querySelector("#grob");
const spil = document.querySelector("#spil");
const body = document.querySelector("body");

bogino.addEventListener("mouseenter", boginoFarve);
bogino.addEventListener("mouseleave", boginoNot);
musikloft.addEventListener("mouseenter", musikFarve);
musikloft.addEventListener("mouseleave", musikNot);
cosmic.addEventListener("mouseenter", cosmicFarve);
cosmic.addEventListener("mouseleave", cosmicNot);
ub.addEventListener("mouseenter", ubFarve);
ub.addEventListener("mouseleave", ubNot);
grob.addEventListener("mouseenter", grobFarve);
grob.addEventListener("mouseleave", grobNot);
spil.addEventListener("mouseenter", spilFarve);
spil.addEventListener("mouseleave", spilNot);

function boginoFarve() {
  body.classList.add("red");
  projekt.innerHTML = "Bogino webshop";
}

function boginoNot() {
  body.classList.remove("red");
  projekt.innerHTML = "";
}

function musikFarve() {
  body.classList.add("purple");
  projekt.innerHTML = "MusikLoftet";
}

function musikNot() {
  body.classList.remove("purple");
  projekt.innerHTML = "";
}

function cosmicFarve() {
  body.classList.add("darkpurple");
  projekt.innerHTML = "Cosmic font";
}

function cosmicNot() {
  body.classList.remove("darkpurple");
  projekt.innerHTML = "";
}

function ubFarve() {
  body.classList.add("greenub");
  projekt.innerHTML = "Ungdomsbyen";
}

function ubNot() {
  body.classList.remove("greenub");
  projekt.innerHTML = "";
}

function grobFarve() {
  body.classList.add("greengrob");
  projekt.innerHTML = "Teater Grob";
}

function grobNot() {
  body.classList.remove("greengrob");
  projekt.innerHTML = "";
}

function spilFarve() {
  body.classList.add("greenspil");
  projekt.innerHTML = "Save Thy Flower";
}

function spilNot() {
  body.classList.remove("greenspil");
  projekt.innerHTML = "";
}
