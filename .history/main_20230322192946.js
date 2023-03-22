
var 
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
  infospot,
  infospotTwo,

  progress,
  progressElement;

var lookAtPositions = [
  new THREE.Vector3(4871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19),
];

var infospotPositions = [
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


function createPanoramaImage(path) {
  const panorama = new PANOLENS.ImagePanorama(path);
  panorama.addEventListener("progress", onProgress);
  panorama.addEventListener("enter", onEnter);
  panorama.addEventListener("enter", 
  function () {
    viewer.tweenControlCenter(lookAtPositions[0], 0);
  });
  return panorama;
}

function createPanoramaVideo(path) {
  const panorama = new PANOLENS.VideoPanorama(path);
  panorama.addEventListener("progress", onProgress);
  panorama.addEventListener("enter", onEnter);
  panorama.addEventListener("enter", 
  function () {
    viewer.tweenControlCenter(lookAtPositions[0], 0);
  });
  return panorama;
}






function infoButton(text,x,y,z) {
  infospot = new PANOLENS.Infospot(350, "images/button.png");
  infospot.position.set(x, y, z);
  infospot.addHoverText(text, 30);
  return infospot;
}


const hideLoading = () => {
  progressContainer.classList.remove("show");
  progressContainer.classList.add("hide");
};

container = document.querySelector(".image-container");

// Creating Place
placeOne = createPanoramaImage("images/4.jpg");
placeTwo = createPanoramaImage("images/5.jpg");
placeThree = createPanoramaImage("images/6.jpg");
placeFour = createPanoramaVideo("images/ClashofClans.mp4");


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
infoTwo=infoButton("Sofa", 2500, -3000, -6000);
infoThree=infoButton("Panting", 4000, -3800, 9500);
infoFour=infoButton("Broken Socket", 5500, 0000, -0000);

// Adding Info Button
placeOne.add(infoOne);
placeOne.add(infoTwo);
placeOne.add(infoThree);
placeTwo.add(infoFour);




// // create a custom button

// var infospotTwo = new PANOLENS.Infospot( 100, "images/button.png" );
// infospotTwo.position.set( 0, 0, -1000 );
// // infospot.scale.set( 2, 2 );
// // infospot.material.color.set( 0xff0000 );
// infospotTwo.addHoverElement( document.getElementById( 'infospotTwo' ), 200 );

// // Add the Infospot to the scene
// placeOne.add( infospotTwo );


// videoOne= new PANOLENS.Media({ video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false })
// videoOne.createVideoElement()

//  videoOne.getUserMedia(

//  ).then(stream => {
//    videoOne.setMediaStream(stream)
//     videoOne.play()
//   })
// placeOne.add(videoOne)





// Creating Viewer
viewer = new PANOLENS.Viewer({
  output: "console",
  container: container,
  controlBar: true,
});

viewer.add(placeOne, placeTwo, placeThree, placeFour);

// Cube custom item
var cube = new THREE.Mesh(
  new THREE.BoxGeometry(100, 100, 100),
  new THREE.MeshNormalMaterial()
);
cube.position.set(-300, 100, 100);
viewer.addUpdateCallback(function () {
  cube.rotation.y += 0.05;
  cube.rotation.x += 0.02;
});
placeOne.add(cube);

var controlItemCube = {
  style: {
    backgroundImage: "url(http://i40.tinypic.com/1531w79.jpg)",
  },

  onTap: function () {
    viewer.tweenControlCenterByObject(cube);
  },
};

viewer.appendControlItem(controlItemCube);

// // Wonder women custom item
// var posterInfospot = new PANOLENS.Infospot(
//   2000,
//   "https://images-na.ssl-images-amazon.com/images/I/91nELBuo3kL._RI_SX200_.jpg"
// );
// posterInfospot.position.set(-4774.9, 474.16, -1375.02);
// panorama1.add(posterInfospot);

// var controlItemPoster = {
//   style: {
//     backgroundImage:
//       "url(https://images-na.ssl-images-amazon.com/images/I/31DcBWmTrNL._CR0,25,201,201.jpg)",
//     float: "left",
//   },

//   onTap: function () {
//     posterInfospot.focus();
//   },
// };
// viewer.appendControlItem(controlItemPoster);

// Video control item
var controlItemVideoGroup = {
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


