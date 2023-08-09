let result = null
let coords ={
  lat:-1.36525 ,
  lng: 36.92412,
}

var platform = new H.service.Platform({
    'apikey': 'K6fed5L_aps2P7_K82K54HsJpQkReOe7BRHecXOGMXA'
  });

var defaultLayers = platform.createDefaultLayers();
  
var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,
    {
      zoom: 19,
    },
    );

const icon = new H.map.Icon('./icons/icons8-bus-30.png')
let marker =new H.map.Marker(coords,{icon:icon})
map.addObject(marker);
map.setCenter(coords);

async function getLocation(){
  let response = await fetch('/getLocation')
  coords =await response.json() 
  let {location} = coords
  marker =new H.map.Marker(location,{icon:icon})
  
  map.setCenter(location);
}
getLocation()
//setInterval(getLocation,60000)