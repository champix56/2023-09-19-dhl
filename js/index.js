//com ligne unique
/*
    com multilignes
*/
//exemple de doc
/**
 * fonction d'initialisation du js
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

function initJs(color) {
  changePreHeader(color);
}
initJs("aquamarine");
