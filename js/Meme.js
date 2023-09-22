import { ImageMeme as Img } from "./Image.js";
import REST_ADR, { REST_RESSOURCES } from "./constantes.js";
/**
 * construction d'instance meme avec ou sans json de base
 * @param {string} jsonConfiguredMemeStr
 */
export function Meme(jsonConfiguredMemeStr) {
  this.texte = "";
  this.x = 0;
  this.y = 32;
  this.color = "#000000";
  this.fontWeight = "500";
  this.fontSize = 32;
  this.underline = true;
  this.italic = true;
  this.imageId = -1;
  this.image =undefined;
  this.render = undefined;
  const insideRender = () => {
    if (undefined !== this.render && typeof this.render === "function") {
      this.render(this);
    }
  };
  /**
   * update d'un meme par objet avec force render on update
   * @param {object} memeData
   */
  this.update = function (memeData) {
    Object.assign(this, memeData);
    insideRender();
  };
  /**
   * chargement de valeurs a partir d'un meme en json
   * @param {string} jsonStr
   */
  this.loadFromString = function (jsonStr) {
    Object.assign(this, JSON.parse(jsonStr));
  };
  /**
   *
   */
  this.save = () => {
    const tmp={...this,image:undefined};
    // delete tmp.image;
    // const tmp=Object.assign({},this);
    //  delete tmp.image;

    return fetch(
      `${REST_ADR}${REST_RESSOURCES.memes}${
        undefined !== this.id ? "/" + this.id : ""
      }`,
      {
        method: undefined !== this.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tmp),
      }
    ).then((response) => response.json());
  };

  if (jsonConfiguredMemeStr !== undefined) {
    this.loadFromString(jsonConfiguredMemeStr);
  }
}
