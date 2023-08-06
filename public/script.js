var platform = new H.service.Platform({
    'apikey': ''
  });

var defaultLayers = platform.createDefaultLayers();
  
var map = new H.Map(document.getElementById('map'),
              defaultLayers.vector.normal.map,
              {
                zoom: 19,
                // center: { lat: 65.7, lng: 13.4 }
              }
              );

const icon = new H.map.Icon('./icons/icons8-bus-30.png')
let cords ={
  lat:-1.36525 ,
  lng: 36.92412,
}
const marker =new H.map.Marker(cords,{icon:icon})

map.addObject(marker);
map.setCenter(cords);