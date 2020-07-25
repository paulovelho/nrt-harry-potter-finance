let itemList = [
	{
		name: "chifre de unicórnio",
		book: "PF",
		value: {
			g: 21,
		},
	},
	{
		name: "varinha no sr. Olivaras",
		book: "PF",
		value: {
			g: 7,
		},
	},
	{
		name: "doces comprados no trem",
		book: "PF",
		value: {
			s: 11,
			k: 7,
		},
	},
	{
		name: "multa do Sr. Weasley por um carro voador",
		book: "CS",
		value: {
			g: 50,
		},
	},
	{
		name: "um ticket no nôitibus andante",
		book: "PA",
		value: {
			s: 11
		},
	},
	{
		name: "omniculares",
		book: "CF",
		value: {
			g: 10
		},
	},
	{
		name: "aposta de Fred e George na Copa do Mundo",
		book: "CF",
		value: {
			g: 37,
			s: 15,
			k: 3,
		},
	},
	{
		name: "prêmio do torneio tribruxo",
		book: "CF",
		value: {
			g: 1000
		},
	},
	{
		name: "recompensa por Sirius Black",
		book: "OF",
		value: {
			g: 10000
		},
	},
	{
		name: "3 butterbeers",
		book: "OF",
		value: {
			s: 6,
		},
	},
	{
		name: "(logo uma butterbeer)",
		book: "OF",
		value: {
			s: 2,
		},
	},
	{
		name: "chapéus sumidores de cabeça",
		book: "OF",
		value: {
			g: 2
		},
	},
	{
		name: "um medalhão amaldiçoado",
		book: "EP",
		value: {
			g: 1500
		},
	},
	{
		name: "valor de venda do broche de Sonserina",
		book: "EP",
		value: {
			g: 10
		},
	},
	{
		name: "curso de aparatação",
		book: "EP",
		value: {
			g: 12
		},
	},
	{
		name: "armadura feita por goblins",
		book: "EP",
		value: {
			g: 500
		},
	},
	{
		name: "cabelo de unicórnio (valor por fio)",
		book: "EP",
		value: {
			g: 10
		},
	},
	{
		name: "Harry Potter (vivo ou morto)",
		book: "RM",
		value: {
			g: 100000
		},
	},
	{
		name: "captura de um trouxa",
		book: "RM",
		value: {
			g: 5
		},
	},
];


function setBook(book) {
	switch(book) {
		case "PF": $("#year-hp").val(1991); break;
		case "CS": $("#year-hp").val(1992); break;
		case "PA": $("#year-hp").val(1993); break;
		case "CF": $("#year-hp").val(1994); break;
		case "OF": $("#year-hp").val(1995); break;
		case "EP": $("#year-hp").val(1996); break;
		case "RM": $("#year-hp").val(1997); break;
	}
}
function selectItem(index) {
	let data = itemList[index];
	setBook(data.book);
	setHpMoney(data.value);
	toTrouxa();
}

function fillUpList() {
	let container = $("#item-list");
	$.each(itemList, (key, item) => {
		container.append(`<div onclick="selectItem(${key})" class="item col-md-6 col-lg-3">${item.name} <br/><span class="value">(${printHpMoney(item.value)})</span><span class="book">(${item.book})</span></div>`);
	});	
}

