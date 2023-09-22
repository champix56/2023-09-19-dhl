import { Meme } from "./Meme.js";
import { ImagesList, listeImages } from "./Image.js";
/**
 *
 * @param {Meme} meme
 */
const fillFormDatas = (meme) => {
  const formElement = document.forms["meme_form"];
  formElement["texte"].value = meme.texte;
  formElement["x"].value = meme.x;
  formElement["y"].value = meme.y;
  formElement["fontSize"].value = meme.fontSize;
  formElement["fontWeight"].value = meme.fontWeight;
  formElement["color"].value = meme.color;
  formElement["underline"].checked = meme.underline;
  formElement["italic"].checked = meme.italic;
  formElement["image"].value = meme.imageId;
  formElement["shadow"].checked = meme.shadow;
  formElement["stroke"].checked = meme.stroke;
};
const addFormEvents = () => {
  fillFormDatas(current);
  renderMeme(current);
  /**
   * fonction de gestion de soumission formulaire
   * @param {SubmitEvent} evt event de soumission
   */
  function onformsubmit(evt) {
    evt.preventDefault();
    const promiseSave = current.save();
    promiseSave.then((obj) => {
      current = new Meme();
      current.render = renderMeme;
      fillFormDatas(current);
      renderMeme(current);
    });

    console.log(current);
    //current.save();
  }
  const form = document.forms["meme_form"];

  form.addEventListener("submit", onformsubmit);

  form["texte"].addEventListener("input", (evt) => {
    current.update({ texte: evt.target.value });
  });
  form["x"].addEventListener("input", (evt) => {
    current.update({ x: Number(evt.target.value) });
  });
  form["y"].addEventListener("input", (evt) => {
    current.update({ y: Number(evt.target.value) });
  });
  form["color"].addEventListener("input", (evt) => {
    current.update({ color: evt.target.value });
  });
  form["fontSize"].addEventListener("input", (evt) => {
    current.update({ fontSize: Number(evt.target.value) });
  });
  form["fontWeight"].addEventListener("input", (evt) => {
    current.update({ fontWeight: evt.target.value });
  });
  form["underline"].addEventListener("change", (evt) => {
    current.update({ underline: evt.target.checked });
  });
  form["italic"].addEventListener("change", (evt) => {
    current.update({ italic: evt.target.checked });
  });
  form["stroke"].addEventListener("change", (evt) => {
    current.update({ stroke: evt.target.checked });
  });
  form["shadow"].addEventListener("change", (evt) => {
    current.update({ shadow: evt.target.checked });
  });
  form["image"].addEventListener("change", (evt) => {
    const id = Number(evt.target.value);
    const imagefound = listeImages.find((elementimage) => {
      return elementimage.id === id;
    });
    current.update({ imageId: id, image: imagefound });
    console.log(current);
  });
};
/**
 *
 * @param {Meme} meme
 */
const renderMeme = (meme) => {
  /* rendu dom pour un meme */
  console.log(meme);
  const svg = document.querySelector("svg");
  const texteElement = svg.querySelector("text");
  texteElement.innerHTML = meme.texte;
  texteElement.setAttribute("y", meme.y);
  texteElement.setAttribute("x", meme.y);
  texteElement.setAttribute("fill", meme.color);
  texteElement.setAttribute("font-size", meme.fontSize);
  texteElement.style.fontWeight = meme.fontWeight;
  texteElement.style.textDecoration = meme.underline ? "underline" : "none";
  texteElement.style.fontStyle = meme.italic ? "italic" : "normal";
  meme.shadow === true
    ? texteElement.classList.add("shadow")
    : texteElement.classList.remove("shadow");
  meme.stroke === true
    ? texteElement.classList.add("stroke")
    : texteElement.classList.remove("stroke");

  svg.setAttribute(
    "viewBox",
    `0 0 ${undefined !== meme.image ? meme.image.w : "1000"} ${
      undefined !== meme.image ? meme.image.h : "1000"
    }`
  );
  svg
    .querySelector("image")
    .setAttribute("href", undefined !== meme.image ? meme.image.url : "");
};
let current = new Meme();
current.render = renderMeme;
// console.log(meme);
/**
 * chargement de la liste des options du select en fonction de la liste array d'image
 * @param {ImagesList} images liste d'image sous forme d'array ImagesListe
 */
const loadSelectImages = (images = listeImages) => {
  const select = document.querySelector("select#image");
  const noItem = select.item(0);
  /*
  //mauvais car reconstruction dom pour tous les element a chaque passage dans le map
  images.map(e=>{
        const optText='<option value="'+e.id+'">'+e.title+'</option>';
        select.innerHTML+=optText;
    });*/
  select.innerHTML = "";
  select.appendChild(noItem);
  images.map((e) => {
    const optEleme = document.createElement("option");
    optEleme.value = e.id;
    optEleme.innerHTML = e.title;
    select.appendChild(optEleme);
  });
};
//window.lso = loadSelectImages;
/**
 * fonction d'initialisation du bandeau js
 * @param {string} color chaine de valeur de couleur css
 * @param {CSSStyleDeclaration} nonUtilise chaine non utilisée pour la demo
 * @returns {undefined} pas de retour
 */
function changePreHeader(color, nonUtilise) {
  var jsLoadedNode = document.querySelector("#is-js-loaded");
  jsLoadedNode.innerHTML = "JS <b>OK</b>";
  jsLoadedNode.style.textAlign = "center";
  jsLoadedNode.style.color = color;
}
/**
 * fonction principale d'initialisation des events
 * necessite le chargement complet et effectif du DOM
 * @param {string} color
 * @returns {undefined} pas de retour
 */
function initJs(color) {
  changePreHeader(color);
  document
    .querySelector("#ne-pas-cliquez")
    .addEventListener("click", function (evt) {
      console.log(evt);
      changePreHeader("blue");
    });
  addFormEvents();
}
const promiseImage = listeImages.loadFromRest();
document.addEventListener("DOMContentLoaded", function (evt) {
  promiseImage.then((r) => {
    loadSelectImages(r);
  });
  initJs("aquamarine");
});
