# 360_Tour

```
var panorama1, panorama2, panorama3, viewer, container, infospot, infospotTwo, infospotThree, infospotFour, progress, progressElement;
```

## Add Images:-
```
panorama1 = new PANOLENS.ImagePanorama('images/1.jpg');
```

## Looking position:-

Positions Details:
```
var lookAtPositions = [
  new THREE.Vector3(4871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19)
];
```
Function:
```
panorama1.addEventListener('enter-fade-start', function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});
```

## Viewer:-
```
viewer = new PANOLENS.Viewer({
  output: 'console', container: container, controlBar: true,
});

viewer.add(panorama1);
```

## Linking pages:-
```
panorama1.link(panorama2, infospotPositions[0]);
panorama2.link(panorama3, infospotPositions[0]);
panorama3.link(panorama1, infospotPositions[1]);

viewer.add(panorama1, panorama2, panorama3);
```

## Adding Info Button:-

Positions Details:
```
var infospotPositions = [
  new THREE.Vector3(3136.06, 1216.30, -3690.14),
  new THREE.Vector3(3258.81, -295.50, 3771.13)
];
```

Linking:
```
panorama1.link(panorama2, infospotPositions[0]);
```

Function:
```
infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(2000, 0000, -6000);
```

Add Hover Text:-
```
infospot.addHoverText( 'Blazer', 30 );
```

Showing Info Icon:
```
panorama1.add(infospot);
```
## Adding progress bar

declaration:-
```
progressElement = document.getElementById("progress");
progressContainer = document.getElementById("progress_container");
```

Functions:-

```
function onEnter(event) {
  progressContainer.classList.remove("hide");
  progressContainer.classList.add("show");
  progressElement.style.width = 0;
  progressElement.classList.remove("finish");
  console.log("entered");
}

function onProgress(event) {
  progress = (event.progress.loaded / event.progress.total) * 100;
  progressElement.style.width = progress + "%";
  if (progress === 100) {
    progressElement.classList.add("finish");
    setTimeout(function () {
      progressContainer.classList.remove("show");
      progressContainer.classList.add("hide");
    }, 500);
  }
}
```
```
panorama1.addEventListener("progress", onProgress);
panorama1.addEventListener("enter", onEnter);
```

CSS Part:-
```
.show {
    opacity: 1;
    display: block;
  }
  .hide {
    opacity: 0;
    display: none;
  }
  
  #progress_container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: #000;
  }
  
  #progress {
    width: 0;
    height: 5px;
    position: fixed;
    top: 50%;
    background: #fff;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
  }
  
  #progress.finish {
    opacity: 0;
  }
```

Html part:-
```
   <div id="progress_container">
      <div id="progress" style="width: 0px" class=""></div>
    </div>
```

## Cube custom item
```
var cube = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshNormalMaterial());
cube.position.set(-300, 100, 100);
viewer.addUpdateCallback(function(){
  cube.rotation.y += 0.05;
  cube.rotation.x += 0.02;
});
panorama1.add( cube );

var controlItemCube = {
  style: {
    backgroundImage: 'url(http://i40.tinypic.com/1531w79.jpg)'
  },
  
  onTap: function(){
    viewer.tweenControlCenterByObject( cube );
  }
};
viewer.appendControlItem(controlItemCube);
```

##  Custom floating 2d Item
```
var posterInfospot = new PANOLENS.Infospot(2000, 'https://images-na.ssl-images-amazon.com/images/I/91nELBuo3kL._RI_SX200_.jpg');
posterInfospot.position.set(-4774.9, 474.16, -1375.02);
panorama1.add(posterInfospot);

var controlItemPoster = {
  style: {
    backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/31DcBWmTrNL._CR0,25,201,201.jpg)',
    float: 'left'
  },
  
  onTap: function(){
    posterInfospot.focus();
  }
};
viewer.appendControlItem(controlItemPoster);
```

## 360 Video control item
```
var controlItemVideoGroup = {
  style: {
    backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/91ovrqFkzkL._RI_SX200_.jpg)',
    float: 'left'
  },
  
  onTap: function(){
    viewer.setPanorama(panorama);
  },
  
  group: 'video'
};
viewer.appendControlItem(controlItemVideoGroup);
```

## Add Video

js
```
infospotFour = new PANOLENS.Infospot( 300, "images/video.png");
infospotFour.position.set( 5000, -2000, 800 );
infospotFour.addHoverElement( document.getElementById( 'desc-container' ), 300 );
```
html
```
    <div id="desc-container" style="display:none">
      <iframe
        id="myVideo"
        width="960"
        height="315"
        src="https://www.youtube.com/embed/35npVaFGHMY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div class="title">(Nature)</div>
  
    </div>
```
css
```
#desc-container {
  max-width: 500px;
  max-height: 500px;
  min-width: 200px;
  min-height: 250px;
  background: #fff;
  color: #000;
  border-radius: 3px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

#desc-container > iframe {
  border: none;
  width:100%;
}
```

## Customize icon buttom
```
  infospot = new PANOLENS.Infospot(350, "images/button.png");
```

## Get x,y,z posion by clicking
added it at the end of the code.
```
window.addEventListener(
  "click",
  () => viewer.outputPosition(),
  false
);
```
