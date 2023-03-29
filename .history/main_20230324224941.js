let 
  panorama,

  placeOne,
  placeTwo,
  placeThree,

  viewer,
  container,

  info,
  infoTwo,
  infoThree,
  infoFour,
  infoFive,
  infospot,
  infospotTwo;





  let lookAtPositions = [
    new THREE.Vector3(4871.39, 1088.07, -118.41),
    new THREE.Vector3(1278.27, 732.65, 4769.19),
  ];
  
  let infospotPositions = [
    new THREE.Vector3(3136.06, 1216.3, -3690.14),
    new THREE.Vector3(3258.81, -295.5, 3771.13),
  ];
  
  progressElement = document.getElementById("progress");
  progressContainer = document.getElementById("progress_container");

 function onEnter(event) {
    progressContainer.classList.remove("hide");
    progressContainer.classList.add("show");
    progressElement.style.width = 0;
    progressElement.classList.remove("finish");
  }
  
 function onProgress(event) {
    progress = (event.progress.loaded / event.progress.total) * 100;
    progressElement.style.width = progress + "%";
    if (progress === 100) {
      progressElement.classList.add("finish");
      setTimeout(function () {
        hideLoading();
      }, 500);
    }
  }

  const hideLoading = () => {
    progressContainer.classList.remove("show");
    progressContainer.classList.add("hide");
  };

  
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

function infoButton(text,z,y,x) {
  infospot = new PANOLENS.Infospot(350, "images/button.png");
  infospot.position.set(z, y, x);
  infospot.addHoverText(text, 30);
  return infospot;
}




container = document.querySelector(".image-container");

// Creating Place
placeOne = createPanoramaImage("images/4.jpg");
placeTwo = createPanoramaImage("images/5.jpg");
placeThree = createPanoramaImage("images/6.jpg");
placeFour = createPanoramaVideo("videos/ClashofClans.mp4");


//Loading
placeOne.addEventListener("enter", hideLoading);
placeTwo.addEventListener("enter", hideLoading);
placeThree.addEventListener("enter", hideLoading);

// Linking 
placeOne.link(placeTwo, infospotPositions[0]);
placeTwo.link(placeThree, infospotPositions[0]);
placeThree.link(placeFour, infospotPositions[0]);
placeFour.link(placeOne, infospotPositions[0]);

// InfoButton
infoOne=infoButton("Cube", 7000, -500, 2500);
infoOne.addEventListener("click", () => {
  if (cube.visible == true) {
    cube.visible = false;
  } else {
    cube.visible = true;
  }
});
infoTwo=infoButton("Sofa", 500, 500, -2000);
infoThree=infoButton("Panting", 4000, -2800, 6500);
infoFour=infoButton("Broken Socket", 5500, 0000, -0000);

infoFive = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infoFive.position.set( 7000, -500, 500 );
infoFive.addHoverElement( document.getElementById( 'desc-container' ), 300 );

// Adding Info Button
placeOne.add(infoOne);
placeOne.add(infoTwo);
placeOne.add(infoThree);
placeOne.add(infoFive);
// placeTwo.add(infoFour);

// Creating Viewer
viewer = new PANOLENS.Viewer({
  output: "console",
  container: container,
  controlBar: true,
});

viewer.add(placeOne, placeTwo, placeThree, placeFour);

// Cube custom item
// let cube = new THREE.Mesh(
//   new THREE.BoxGeometry(100, 100, 100),
//   new THREE.MeshNormalMaterial()
// );
// cube.position.set(-300, 100, 100);
// viewer.addUpdateCallback(function () {
//   cube.rotation.y += 0.100;
//   cube.rotation.x += 0.100;
// });
// placeOne.add(cube);

// let controlItemCube = {
//   style: {
//     backgroundImage: "url(http://i40.tinypic.com/1531w79.jpg)",
//   },

//   onTap: function () {
//     viewer.tweenControlCenterByObject(cube);
//   },
// };

// viewer.appendControlItem(controlItemCube);

// // Wonder women custom item
var posterInfospot = new PANOLENS.Infospot(
  2000,
  "https://images-na.ssl-images-amazon.com/images/I/91nELBuo3kL._RI_SX200_.jpg"
);
posterInfospot.position.set(-4774.9, 474.16, -1375.02);
placeOne.add(posterInfospot);

var controlItemPoster = {
  style: {
    backgroundImage:
      "url(https://images-na.ssl-images-amazon.com/images/I/31DcBWmTrNL._CR0,25,201,201.jpg)",
    float: "left",
  },

  onTap: function () {
    posterInfospot.focus();
  },
};
viewer.appendControlItem(controlItemPoster);

// Video control item
let controlItemVideoGroup = {
  style: {
    backgroundImage:
      "url(https://images-na.ssl-images-amazon.com/images/I/91ovrqFkzkL._RI_SX200_.jpg)",
    float: "left",
  },

  onTap: function () {

    viewer.setPanorama(placeFour);
    
  },

  // group: "video",
};
viewer.appendControlItem(controlItemVideoGroup);

// // Load 3d model

// var loader = new THREE.GLTFLoader();

// // Load the GLTF model
// loader.load('3d/bird.gltf', function (gltf) {
//   // Add the GLTF model to the panorama
//   placeOne.add(gltf.scene);
// });
// loader.position.set(-300, 100, 100);


