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
placeOne.add(cube);
placeOne.add(posterInfospot);
// placeTwo.add(infoFour);

viewer.add(placeOne, placeTwo, placeThree, placeFour);


  



// // Load 3d model

// var loader = new THREE.GLTFLoader();

// // Load the GLTF model
// loader.load('3d/bird.gltf', function (gltf) {
//   // Add the GLTF model to the panorama
//   placeOne.add(gltf.scene);
// });
// loader.position.set(-300, 100, 100);


