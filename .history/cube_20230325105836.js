// Cube custom item
let cube = new THREE.Mesh(
    new THREE.BoxGeometry(100, 100, 100),
    new THREE.MeshNormalMaterial()
  );
  cube.position.set(-300, 100, 100);
  viewer.addUpdateCallback(function () {
    cube.rotation.y += 0.100;
    cube.rotation.x += 0.100;
  });
  placeOne.add(cube);
  
  let controlItemCube = {
    style: {
      backgroundImage: "url(http://i40.tinypic.com/1531w79.jpg)",
    },
  
    onTap: function () {
      viewer.tweenControlCenterByObject(cube);
    },
  };
  
  viewer.appendControlItem(controlItemCube);