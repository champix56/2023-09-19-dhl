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
    console.log('texte',evt.target['texte'].value);
    console.log('texte',evt.target['x'].value);
    console.log('texte',evt.target['y'].value);
    console.log('texte',evt.target['color'].value);
    console.log('texte',evt.target['fontSize'].value);
    console.log('texte',evt.target['fontWeight'].value);
    //debugger;

  }

  document.forms["meme_form"].addEventListener("submit", onformsubmit);
}

document.addEventListener("DOMContentLoaded", function (evt) {
  initJs("aquamarine");
});
