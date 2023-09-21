import {ImageMeme as Img} from './Image.js'
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
  this.underline = false;
  this.italic = false;
  this.imageId = -1;
  this.image=new Img();
  /**
   * chargement de valeurs a partir d'un meme en json
   * @param {string} jsonStr
   */
  this.loadFromString = function (jsonStr) {
    Object.assign(this, JSON.parse(jsonStr));
  };


  if(jsonConfiguredMemeStr!==undefined){
    this.loadFromString(jsonConfiguredMemeStr);
  }
}

var meme = new Meme();
