(function (window, mapster) {

  mapster.MAP_OPTIONS = {
    	  
      center: {
        lat: 37.791350,
        lng: -122.435883
      },
        zoom : 10,
        disableDefaultUI: false,
        scrollwheel: true,
        draggable : true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 11,
        minZoom: 9,
        zoomControlOptions      : {
          position    : google.maps.ControlPosition.LEFT_BOTTOM,
          style       : google.maps.ZoomControlStyle.DFAULT
        },
        panControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
      }
  };
	
}(window, window.Mapster || (window.Mapster = {})));
	
	
	 