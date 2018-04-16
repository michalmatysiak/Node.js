var os = require('os');

function getTime() {
	var uptime = os.uptime();
	var hours = Math.floor(uptime / 3600);
	var minutes = Math.floor((uptime % 3600) / 60);
	var seconds = Math.floor((uptime % 3600) % 60).toFixed(0); 
	console.log('Uptime: ' + hours + 'h ' + minutes + 'min ' + seconds + 's');
}

exports.print = getTime;