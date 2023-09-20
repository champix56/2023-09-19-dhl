function initJs(color) {
  var jsLoadedNode = document.querySelector("#is-js-loaded");
  jsLoadedNode.innerHTML = "JS <b>OK</b>";
  jsLoadedNode.style.textAlign = "center";
  jsLoadedNode.style.color = color;
}
initJs("aquamarine", { a: 34, b: "eee" });
