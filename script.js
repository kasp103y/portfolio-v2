const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  console.log(visibility);

  if (visibility === "false") {
    navToggle.setAttribute("aria-expanded", true);
    primaryNav.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

const bogino = document.querySelector("#bogino");
const musikloft = document.querySelector("#musik");
const cosmic = document.querySelector("#cosmic");
// const ub = document.querySelector("#ub");
const grob = document.querySelector("#grob");
const spil = document.querySelector("#spil");
const body = document.querySelector("body");
const projekt = document.querySelector("#projekt");

//Modal const
//Cosmic
const cosmicModal = document.querySelector("#cosmic-modal");
const offCosmic = document.querySelector(".close-cosmic");

//Bogino
const boginoModal = document.querySelector("#bogino-modal");
const offBogino = document.querySelector(".close-bogino");

//Spil
const spilModal = document.querySelector("#spil-modal");
const offSpil = document.querySelector(".close-spil");

//Musikloftet
const musikModal = document.querySelector("#musik-modal");
const offMusik = document.querySelector(".close-musik");

//Ungdomsbyen
/* const ubModal = document.querySelector("#ub-modal");
const offUb = document.querySelector(".close-ub"); */

//grob
const grobModal = document.querySelector("#grob-modal");
const offGrob = document.querySelector(".close-grob");

const modal = document.querySelector(".modal");

//Modal functions
bogino.addEventListener("click", openBogino);
offBogino.addEventListener("click", closeBogino);

function closeBogino() {
  boginoModal.close();
}
function openBogino() {
  boginoModal.showModal();
}

cosmic.addEventListener("click", openCosmic);
offCosmic.addEventListener("click", closeCosmic);

function closeCosmic() {
  cosmicModal.close();
}
function openCosmic() {
  cosmicModal.showModal();
}

spil.addEventListener("click", openSpil);
offSpil.addEventListener("click", closeSpil);

function closeSpil() {
  spilModal.close();
}
function openSpil() {
  spilModal.showModal();
}

musikloft.addEventListener("click", openMusik);
offMusik.addEventListener("click", closeMusik);

function closeMusik() {
  musikModal.close();
}
function openMusik() {
  musikModal.showModal();
}

/* ub.addEventListener("click", openUb);
offUb.addEventListener("click", closeUb);

function closeUb() {
  ubModal.close();
}
function openUb() {
  ubModal.showModal();
} */

grob.addEventListener("click", openGrob);
offGrob.addEventListener("click", closeGrob);

function closeGrob() {
  grobModal.close();
}
function openGrob() {
  grobModal.showModal();
}

//Modals over and out

bogino.addEventListener("mouseenter", boginoFarve);
bogino.addEventListener("mouseleave", boginoNot);
musikloft.addEventListener("mouseenter", musikFarve);
musikloft.addEventListener("mouseleave", musikNot);
cosmic.addEventListener("mouseenter", cosmicFarve);
cosmic.addEventListener("mouseleave", cosmicNot);
/* ub.addEventListener("mouseenter", ubFarve);
ub.addEventListener("mouseleave", ubNot); */
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

/* function ubFarve() {
  body.classList.add("greenub");
  projekt.innerHTML = "Ungdomsbyen";
}

function ubNot() {
  body.classList.remove("greenub");
  projekt.innerHTML = "";
} */

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
