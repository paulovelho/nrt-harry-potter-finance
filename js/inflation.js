
// uk inflation per year:
var inflationPerYear = {
	1990:	9.46,	
	1991:	5.87,
	1992:	3.74,
	1993:	1.59,
	1994:	2.41,
	1995:	3.47,
	1996:	2.41,
	1997:	3.14,
	1998:	3.43,
	1999:	1.54,
	2000:	2.96,
	2001:	1.77,
	2002:	1.67,
	2003:	2.89,
	2004:	2.98,
	2005:	2.82,
	2006:	3.20,
	2007:	4.29,
	2008:	3.99,
	2009:	-0.53,
	2010:	4.61,
	2011:	5.20,
	2012:	3.21,
	2013:	3.04,
	2014:	2.36,
	2015:	0.99,
	2016:	1.74,
	2017:	3.58,
	2018:	2.48,
	2019:	1.80,
	2020: 	0.62,
	2021:	1,
};
var maxInflationData = 2020;
var currentYear = 2020;

var inflationCalculator = (val, year) => {
	let inflation = 5;
	year = parseInt(year);
	if(year >= 1990 || year < maxInflationData) inflation = inflationPerYear[year];
	let newVal = val + (val * inflation / 100);
//	console.info("multiplying "+val+" to inflation ("+inflation+") of " + year, newVal);
	if( year == currentYear ) return parseFloat(newVal).toFixed(2);
	return inflationCalculator(newVal, year+1);
}


