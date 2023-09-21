import { Meme } from "./Meme.js";
import { ImagesList, listeImages } from "./Image.js";
/*let meme=new Meme();
console.log(meme);*/
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
  /**
   * fonction de gestion de soumission formulaire
   * @param {SubmitEvent} evt event de soumission
   */
  function onformsubmit(evt) {
    evt.preventDefault();
    console.log(evt);
    var meme = {
      texte: evt.target["texte"].value,
      x: Number(evt.target["x"].value),
      y: Number(evt.target["y"].value),
      color: evt.target["color"].value,
      fontSize: Number(evt.target["fontSize"].value),
      fontWeight: evt.target["fontWeight"].value,
      //   fn:function (params) {}
    };
    console.log(meme);
    // console.log('texte',evt.target['texte'].value);
    // console.log('texte',evt.target['x'].value);
    // console.log('texte',evt.target['y'].value);
    // console.log('texte',evt.target['color'].value);
    // console.log('texte',evt.target['fontSize'].value);
    // console.log('texte',evt.target['fontWeight'].value);
    //debugger;
  }

  document.forms["meme_form"].addEventListener("submit", onformsubmit);
}
const promiseImage = listeImages.loadFromRest();
document.addEventListener("DOMContentLoaded", function (evt) {
  promiseImage.then((r) => {
    loadSelectImages(r);
  });
  initJs("aquamarine");
});
