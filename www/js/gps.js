var lat = document.getElementById("gps.content.lat");
var lon = document.getElementById("gps.content.lon");

function geolocationSuccess(posizione){
	lat.innerHTML = position.coords.latitude;
	lon.innerHTML = position.coords.longitude;
}

function geolocationError(errore){
	alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
}

function gpsUpdate(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}

gpsUpdate();
