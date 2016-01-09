function AnglePrinter(){
	//http://stackoverflow.com/a/17445304/896112 - Recursive Euclid's Algorithm
	this.gcd = function gcd(a, b) {
		return (!b)?a:gcd(b, a%b);
	}
}

AnglePrinter.prototype.toRadian = function(degrees){

	// Account for integer coefficients of degrees / 180
	if(degrees % 180 == 0) {
		if(degrees == 180) {
			return "π";
		}
		else if(degrees == -180){
			return "-π";
		}else{
			return degrees / 180 + "π";
		}
	}

	// Get fraction / π because π will be appended later
	var frac = degrees / 180;

	// 10 ** number of decimal places
	var multiplier = Math.pow(10, frac.toString().split(".")[1].length);
	
	// Multiply top and bottom by 10^n to get integer numerator and denominator
	var numerator = frac * multiplier;
	var denominator = multiplier;

	// Find GCD (or GCF) of numerator and denominator to reduce fraction
	var g = this.gcd(numerator, denominator);	

	// Reduce fraction
	numerator = numerator/g;
	denominator = denominator/g;

	// This is a pretty printer, replaces 1 or -1 with π or -π
	if(numerator == 1){
		numerator = "π";
	}else if(numerator == -1){
		numerator = "-π";
	}else{
		numerator += "π"
	}

	// If the denominator is a negative number, move negative sign to numerator
	if(denominator < 0){
		denominator = Math.abs(denominator);
		numerator = "-"+numerator;
	}

	return numerator +"/"+ denominator; 
}

AnglePrinter.prototype.toDegrees = function(radian){
	return radian * (180/Math.PI) + "°";
}

AnglePrinter.prototype.printRadian = function(radian){
	return this.toRadian(radian * (180/Math.PI));
}

AnglePrinter.prototype.printDegrees = function(degrees){
	return degrees +"°";
}

module.exports = new AnglePrinter();