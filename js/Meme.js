/**
 * Constructeur d'objet Meme
 */
function Meme(configuredMeme) {
    this.texte = "";
    this.x = 0;
    this.y = 32;
    this.color = "#000000";
    this.fontWeight = "500";
    this.fontSize = 32;
    this.underline = false;
    this.italic = false;
    this.imageId=-1 
}

var meme=new Meme();