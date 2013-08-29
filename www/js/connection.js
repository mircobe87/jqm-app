var con_states = new Array();
var con_type = navigator.connection.type;
var item = document.getElementById("connection.contype");

con_states[Connection.UNKNOWN] 	= "Sconosciuta";
con_states[Connection.ETHERNET] = "Ethernet";
con_states[Connection.WIFI] 	= "WiFi";
con_states[Connection.CELL_2G] 	= "Dati 2G";
con_states[Connection.CELL_3G] 	= "Dati 3G";
con_states[Connection.CELL_4G] 	= "Dati 4G";
con_states[Connection.CELL] 	= "Dati";
con_states[Connection.NONE] 	= "Nessuna";

item.innerHTML = con_states[con_type];