  
function infoButton(text,z,y,x) {
    infospot = new PANOLENS.Infospot(350, "images/button.png");
    infospot.position.set(z, y, x);
    infospot.addHoverText(text, 30);
    return infospot;
  }
  
  