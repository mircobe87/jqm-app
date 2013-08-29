var lat = document.getElementById("gps.content.lat");
var lon = document.getElementById("gps.content.lon");

function geolocationSuccess(position){
	lat.innerHTML = position.coords.latitude;
	lon.innerHTML = position.coords.longitude;
}

function geolocationError(error){
	alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
}

function gpsUpdate(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError,{enableHighAccuracy: true});
}

gpsUpdate();
