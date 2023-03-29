
//360 Video control item
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