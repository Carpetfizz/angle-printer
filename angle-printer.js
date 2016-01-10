// http://stackoverflow.com/a/17445304/896112 - Recursive Euclid's Algorithm
function gcd(a, b) {
	return (!b) ? a : gcd(b, a % b);
}

var anglePrinter = {};

anglePrinter.toRadians = function(degrees) {
	// Account for integer coefficients of degrees / 180
	if (degrees % 180 === 0) {
		if (degrees === 180) {
			return "π";
		} else if (degrees === -180) {
			return "-π";
		} else {
			return degrees / 180 + "π";
		}
	}

	// Get fraction / π because π will be appended later
	var frac = degrees / 180;

	// 10 ** number of decimal places
	var denominator = Math.pow(10, frac.toString().split(".")[1].length);
	
	// Multiply top by 10^n to get integer numerator
	var numerator = frac * denominator;

	// Find GCD (or GCF) of numerator and denominator to reduce fraction
	var g = gcd(numerator, denominator);	

	// Reduce fraction
	numerator /= g;
	denominator /= g;
	
	// If the denominator is a negative number, move negative sign to numerator
	if (denominator < 0) {
		denominator = -denominator;
		numerator = -numerator;
	}

	// This is a pretty printer, replaces 1 or -1 with π or -π
	if (numerator === 1) {
		numerator = "";
	} else if (numerator === -1) {
		numerator = "-";
	}
	
	numerator += "π";

	return numerator + "/" + denominator; 
};

anglePrinter.toDegrees = function(radians) {
	return radians * (180 / Math.PI) + "°";
};

anglePrinter.printRadians = function(radians) {
	return this.toRadians(radians * (180 / Math.PI));
};

anglePrinter.printDegrees = function(degrees) {
	return degrees + "°";
};

module.exports = anglePrinter;
