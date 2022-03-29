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
}

function boginoNot() {
  body.classList.remove("red");
}

function musikFarve() {
  body.classList.add("purple");
}

function musikNot() {
  body.classList.remove("purple");
}

function cosmicFarve() {
  body.classList.add("darkpurple");
}

function cosmicNot() {
  body.classList.remove("darkpurple");
}

function ubFarve() {
  body.classList.add("greenub");
}

function ubNot() {
  body.classList.remove("greenub");
}

function grobFarve() {
  body.classList.add("greengrob");
}

function grobNot() {
  body.classList.remove("greengrob");
}

function spilFarve() {
  body.classList.add("greenspil");
}

function spilNot() {
  body.classList.remove("greenspil");
}
