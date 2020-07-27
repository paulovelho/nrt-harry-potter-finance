// globals:
var yearsHp = {
	"1991": "1991 - ...a Pedra Filosofal",
	"1992": "1992 - ...a Câmara Secreta",
	"1993": "1993 - ...o Prisioneiro de Azkhaban",
	"1994": "1994 - ...o Cálice de Fogo",
	"1995": "1995 - ...a Ordem da Fênix",
	"1996": "1996 - ...o Enigma do Príncipe",
	"1997": "1997 - ...as Relíquias da Morte",
}
var currentYear = new Date().getFullYear();

var currencies = {
	"BRL": "reais",
	"EUR": "euros",
	"GBP": "pounds",
	"USD": "dólares",
};

function fillUpHpYear() {
	let select = $("#year-hp");
	$.each(yearsHp, (key, value) => {
		select.append('<option value=' + key + '>' + value + '</option>');
	});
	fillUpYears(select, 1998, currentYear);
}

function fillUpRealYears() {
	let select = $("#year-rl");
	fillUpYears(select, 1991, currentYear);
}

function fillUpYears(select, start, end) {
	for(var i = start; i <= end; i ++) {
		select.append('<option value=' + i + '>' + i + '</option>');
	}
}

function fillUpCurrencies() {
	let select = $("#currency");
	$.each(currencies, (key, value) => {
		select.append('<option value=' + key + '>' + value + '</option>');
	});
}

function reset() {
	$("#galleons").val(0);
	$("#sickles").val(0);
	$("#knuts").val(0);
	$("#trouxa").val(0);
	$("#currency").val("GBP");
	$("#year-hp").val(currentYear);
	$(".more-info").html("");
}


let rates = null;
function fixedRate() {
	rates = {
		"BRL": 5.23,
		"EUR": 0.85,
		"GBP": 0.78,
	};
	$("#usd-rate").html("R$ " + rates["BRL"].toFixed(2));
	$("#rate-date").html("Cotação aproximada de 25 de julho");
}
function getConversions() {
	return fixedRate();
	let exchangeKey = "84f0e7f007024e6aa0c5fc52f419b104";
	let exchangeUrl = "https://openexchangerates.org/api/latest.json?app_id=" + exchangeKey;
	$.getJSON(
		exchangeUrl,
		(data) => {
			rates = data.rates;
			$("#usd-rate").html("R$ " + rates["BRL"].toFixed(2));
			$("#rate-date").html("Cotação automática pelo openexchangerates.org");
		}
	);
}



$(document).ready(() => {
	fillUpHpYear();
	fillUpRealYears();
	fillUpCurrencies();
	fillUpList();
	$("#year-hp").val(currentYear);
	$("#year-rl").val(currentYear);
	getConversions();
	reset();
});



