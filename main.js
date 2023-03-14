// const panoramaImage = new PANOLENS.ImagePanorama("images/PXL.jpg");
// const imageContainer = document.querySelector(".image-container");

// const viewer = new PANOLENS.Viewer({
//   container: imageContainer,
//   autoRotate: false,
//   autoRotateSpeed: 0.3,
//   controlBar: false,
// });

// viewer.add(panoramaImage);
// function onButtonClick(targetPanorama) {
// 	bar.classList.remove('hide');
// 	viewer.setPanorama(targetPanorama);
// }

var panorama1,
  panorama2,
  panorama3,
  viewer,
  container,
  infospot,
  infospotTwo,
  infospotThree,
  infospotFour,
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

const hideLoading = () => {
  progressContainer.classList.remove("show");
  progressContainer.classList.add("hide");
};

container = document.querySelector(".image-container");

panorama1 = new PANOLENS.ImagePanorama("images/4.jpg");
panorama1.addEventListener("progress", onProgress);
panorama1.addEventListener("enter", onEnter);
panorama1.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});

panorama2 = new PANOLENS.ImagePanorama("images/5.jpg");
panorama2.addEventListener("progress", onProgress);
panorama2.addEventListener("enter", onEnter);
panorama2.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});

panorama3 = new PANOLENS.ImagePanorama("images/6.jpg");
panorama3.addEventListener("progress", onProgress);
panorama3.addEventListener("enter", onEnter);
panorama3.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});

// ==============================
panorama1.addEventListener("enter-fade-start", hideLoading);
panorama2.addEventListener("enter-fade-start", hideLoading);
panorama3.addEventListener("enter-fade-start", hideLoading);
// ==============================

panorama1.link(panorama2, infospotPositions[0]);
panorama2.link(panorama3, infospotPositions[0]);
panorama3.link(panorama1, infospotPositions[0]);

// infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospot.position.set(2000, 0000, -6000);
// infospot.addHoverText("Blazer", 30);

// infospotTwo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospotTwo.position.set(2500, -3000, -6000);
// infospotTwo.addHoverText("Bucket", 30);

// infospotThree = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospotThree.position.set(7000, -2000, 3700);
// infospotThree.addHoverText("Broken Socket", 30);

// infospotFour = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospotFour.position.set(5500, 0000, -0000);
// infospotFour.addHoverText("Broken Socket", 30);

// panorama1.add(infospot);
// panorama1.add(infospotTwo);
// panorama1.add(infospotFour);
// panorama2.add(infospotThree);

viewer = new PANOLENS.Viewer({
  output: "console",
  container: container,
  controlBar: true,
});
viewer.add(panorama1, panorama2, panorama3);

// // Cube custom item
// var cube = new THREE.Mesh(
//   new THREE.BoxGeometry(100, 100, 100),
//   new THREE.MeshNormalMaterial()
// );
// cube.position.set(-300, 100, 100);
// viewer.addUpdateCallback(function () {
//   cube.rotation.y += 0.05;
//   cube.rotation.x += 0.02;
// });
// panorama1.add(cube);

// var controlItemCube = {
//   style: {
//     backgroundImage: "url(http://i40.tinypic.com/1531w79.jpg)",
//   },

//   onTap: function () {
//     viewer.tweenControlCenterByObject(cube);
//   },
// };
// viewer.appendControlItem(controlItemCube);

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

// // Video control item
// var controlItemVideoGroup = {
//   style: {
//     backgroundImage:
//       "url(https://images-na.ssl-images-amazon.com/images/I/91ovrqFkzkL._RI_SX200_.jpg)",
//     float: "left",
//   },

//   onTap: function () {
//     viewer.setPanorama(panorama);
//   },

//   group: "video",
// };
// viewer.appendControlItem(controlItemVideoGroup);
