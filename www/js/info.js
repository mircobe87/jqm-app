function putInfo() {
	try {
		device;
	} catch (err) {
		alert("ERRORE:\n" + err.message);
		return;
	}
	document.getElementById("name").innerHTML = device.name;
	document.getElementById("cordova").innerHTML = device.cordova;
	document.getElementById("platform").innerHTML = device.platform;
	document.getElementById("uuid").innerHTML = device.uuid;
	document.getElementById("model").innerHTML = device.model;
	document.getElementById("version").innerHTML = device.version;
	document.getElementById("display").innerHTML = screen.availWidth + " x " + screen.availHeight;
}
putInfo();