/**
 * Constructeur d'objet Meme
 */
function Meme(configuredMeme) {
  this.texte = "texte du meme";
  
  
  var _imageId = 0;
  this.getImageId=function () {
    return _imageId;
  }
  
  function _changeImage(imageId) {
    console.log("change image fn called");
    _imageId = imageId;
  }
  this.changeImage=_changeImage;

  console.log("Meme called", this.texte);
  _changeImage(25);
  console.log(_imageId);
}

var meme=new Meme();