let   panorama;

function createPanoramaImage(path) {
    panorama = new PANOLENS.ImagePanorama(path);
    panorama.addEventListener("progress", onProgress);
    panorama.addEventListener("enter", onEnter);
    panorama.addEventListener("enter", 
      function () {
      viewer.tweenControlCenter(lookAtPositions[0], 0);
       });
    return panorama;
  }
  
  function createPanoramaVideo(path) {
    panorama = new PANOLENS.VideoPanorama(path);
    panorama.addEventListener("progress", onProgress);
    panorama.addEventListener("enter", onEnter);
    panorama.addEventListener("enter", 
    function () {
      viewer.tweenControlCenter(lookAtPositions[0], 0);
    });
    return panorama;
  }