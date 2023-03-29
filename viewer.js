var viewer,  container;

container = document.querySelector(".image-container");

// Creating Viewer
viewer = new PANOLENS.Viewer({
    output: "console",
    container: container,
    controlBar: true,
  });