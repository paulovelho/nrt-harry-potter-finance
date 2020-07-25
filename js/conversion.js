var knutPound = 0.023;

function getHpMoney() {
	return {
		g: $("#galleons").val(),
		s: $("#sickles").val(),
		k: $("#knuts").val(),
	};
}
function setHpMoney(data){
	$("#galleons").val(data.g || 0);
	$("#sickles").val(data.s || 0);
	$("#knuts").val(data.k || 0);
}
function printHpMoney(data) {
	let result = [];
	if(data.g) result.push(data.g + " galeões");
	if(data.s) result.push(data.s + " sicles");
	if(data.k) result.push(data.k + " nuques");
	return result.join(" e "); 
}
function getStartYear() {
	return $("#year-hp").val();
}

function getKnuts() {
	let hpMoney = getHpMoney();
	let knuts = +hpMoney.k || 0;
	if(hpMoney.s) knuts += hpMoney.s * 29;
	if(hpMoney.g) knuts += hpMoney.g * 29 * 17;
	doLog(`convertendo ${printHpMoney(hpMoney)} ou (${knuts} nuques)`);
	return knuts;
}
function knutsToHp(knuts) {
	let sickles = Math.floor(knuts / 29);
	knuts = knuts % 29;
	let galleons = Math.floor(sickles / 17);
	sickles = sickles % 17;
	return { g: galleons, s: sickles, k: knuts };
}

let moreInfo = "";
function fixYear(pound) {
	let startYear = getStartYear();
	let endYear = currentYear;
	if(startYear == endYear) return pound;

	let adjustedPound = 0;
	adjustedPound = inflationCalculator(+pound, startYear);
	moreInfo += `equivalente a £${pound} em ${startYear}<br/>`;
	doLog(`ajustando inflação de £${pound} em ${startYear} para £${adjustedPound} em ${endYear}`);
	return adjustedPound;
}

function fixCurrency(pound) {
	let currency = $("#currency").val();

	if(currency == "GBP") return pound;
	dollars = (+pound / rates["GBP"]).toFixed(2);
	doLog(`converetendo de GBP para USD: US$ ${dollars};`);
	if(currency == "USD") return dollars;
	let converted = (dollars * rates[currency]).toFixed(2);
	doLog(`...valor final em ${currency}: ${converted}`);
	return converted;
}
function fixCurrencyToGBP() {
	let currency = $("#currency").val();
	let value = $("#trouxa").val();
	if(currency == "GBP") return value;
	let usd = value / rates[currency];
	if(currency == "USD") {
		doLog(`convertendo ${value} de ${currency} para USD: US$ ${usd}`);
		return usd;
	}
	let finalVal = usd * rates["GBP"];
	doLog(`convertendo ${value} de ${currency} para GBP: £ ${finalVal}`);
	return finalVal;
}

function toTrouxa() {
	startLog("CONVERTENDO PARA TROUXA")
	moreInfo = "";
	let knuts = getKnuts();

	let value = (knuts * knutPound).toFixed(2);
	doLog(`valor do Knut: [£${knutPound}] - total em pounds: [£${value}]`);
	value = fixYear(value);
	value = fixCurrency(value);

	$(".more-info").html(moreInfo);
	$("#trouxa").val(value);
	endLog();
}

function toBruxo() {
	startLog("CONVERTENDO PARA BRUXO")
	$("#year-hp").val(currentYear);
	let pound = fixCurrencyToGBP();
	let knuts = parseInt(pound / knutPound);
	doLog(`valor em knuts: ${knuts}`);
	let hp = knutsToHp(knuts);
	doLog(printHpMoney(hp));
	setHpMoney(hp);
	$(".more-info").html("");
	endLog();
}
