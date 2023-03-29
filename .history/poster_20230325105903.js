// Wonder women custom item
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
  