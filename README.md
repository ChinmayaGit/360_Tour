# 360_Tour

```
var panorama1, panorama2, panorama3, viewer, container;
```

## Add Images:-
```
panorama1 = new PANOLENS.ImagePanorama('images/1.jpg');
```

## Looking position at start:-
```
var lookAtPositions = [
  new THREE.Vector3(4871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19)
];
```
Adding Looking Function:-
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

