const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoibXNiZWV0aG92ZW4iLCJhIjoiY2ptaTYxMDM2MDFtZTNxcXoxNzg4NXV3MiJ9.tGvHw_lUZAywcj5UHkQK0g';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12, 
  style: 'mapbox://styles/mapbox/streets-v10'
});

const markerDom = document.createElement('div');
markerDom.style.width = '32px';
markerDom.style.height = '39px';
markerDom.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDom).setLngLat([-74.009151, 40.705086]).addTo(map);
//new mapboxgl.Marker(markerDom).setLngLat([-87.641, 41.895]).addTo(map);
//new mapboxgl.Marker().setLngLat().addTo(map);

module.export = {map}