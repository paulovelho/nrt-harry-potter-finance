
function doLog(data) {
	console.info("log: ", data);
	let logScr = $("#log");
	logScr.append(">> " + data + "<br/>");
}

function startLog(title) {
	let logScr = $("#log");
	logScr.append("==============[" + title + "]==============><br/>");	
}

function endLog() {
	let logScr = $("#log");
	logScr.append("___________________________________________________________<br/><br/>");
	logScr.scrollTop(logScr[0].scrollHeight);
}
