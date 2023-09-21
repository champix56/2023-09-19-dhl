/**
 * 
 */
class ImageShort {
  #uid;
  /**
   * value of width
   */
  w = 100;
  h;
  url;
  /**
   * 
   * @param {object?}} img 
   */
  constructor(img={}) {    
    //if (undefined === img) img = {};
    this.#uid = Math.random();

    if (undefined !== img.w) {
      this.w = img.w;
    }
    //equivalant tina ternaire du if/else
    this.h = undefined !== img.h ? img.h : 100;
    if (undefined !== img.url && img.url.length >= 5) {
      this.url = img.url;
    }
    //else if(boolCondition){ instructions; }
    else {
      this.url = "";
    }
  }
  /**
   * getter de #uid
   */
  get uid() {
    return this.#uid;
  }
  /**
   * setter #uid
   */
  set uid(value) {
    this.#uid = value;
  }
  /**
   * get ration of image
   * @returns {number} ratio between W and H
   */
  getRatioWH(){
    return this.w/this.h;
  }
}
class ImageMeme extends ImageShort {
  title = "no image";
  id = undefined;
  constructor(img={}) {
    super(img);
  //  if (undefined === img) img = {};
    if (undefined !== img.title && img.title.length > 2) {
      this.title = img.title;
    } else if (
      undefined === img.title &&
      undefined !== img.url &&
      img.url.length > 5
    ) {
      this.title = img.url.slice(
        img.url.lastIndexOf("/") + 1,
        img.url.lastIndexOf(".")
      );
    }
    if (undefined !== img.id) {
      this.id = img.id;
    }
  }
}
