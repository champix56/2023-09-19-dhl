function initJs(color) {
  console.time("fnInitJs");
  console.log(arguments);
  console.trace(arguments);
  console.warn(arguments);
  console.error(arguments);

  var jsLoadedNode = document.querySelector("#is-js-loaded");
  jsLoadedNode.innerHTML = "JS <b>OK</b>";
  jsLoadedNode.style.textAlign = "center";
  jsLoadedNode.style.color = color;
  console.timeEnd("fnInitJs");
}
initJs("aquamarine", { a: 34, b: "eee" });
