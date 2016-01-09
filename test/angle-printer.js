var should = require('chai').should(),
	anglePrinter = require('../angle-printer');

describe('#toRadian', function(){
	it('converts 270 to 3π/2', function(){
		anglePrinter.toRadian(270).should.equal('3π/2');
	});
	it('converts 360 to 2π', function(){
		anglePrinter.toRadian(360).should.equal('2π');
	});
	it('converts 90 to π/2', function(){
		anglePrinter.toRadian(90).should.equal('π/2');
	});
	it('converts -90 to -π/2', function(){
		anglePrinter.toRadian(-90).should.equal('-π/2');
	});
	it('converts 180 to π', function(){
		anglePrinter.toRadian(180).should.equal('π');
	});
	it('converts -180 to -π', function(){
		anglePrinter.toRadian(-180).should.equal('-π');
	});
});

describe('#toDegrees', function(){
	it('converts 3*Math.PI/2 to 270°', function(){
		anglePrinter.toDegrees(3*Math.PI/2).should.equal('270°');
	});
	it('converts 2*Math.PI to 360°', function(){
		anglePrinter.toDegrees(2*Math.PI).should.equal('360°');
	});
	it('converts Math.PI/2 to 90°', function(){
		anglePrinter.toDegrees(Math.PI/2).should.equal('90°');
	});
	it('converts -Math.PI/2 to -90°', function(){
		anglePrinter.toDegrees(-Math.PI/2).should.equal('-90°');
	});
	it('converts Math.PI to 180°', function(){
		anglePrinter.toDegrees(Math.PI).should.equal('180°');
	});
	it('converts -Math.PI to -180°', function(){
		anglePrinter.toDegrees(-Math.PI).should.equal('-180°');
	});
});

describe('#printRadian', function(){
	it('converts 3*Math.PI/2 to 3π/2', function(){
		anglePrinter.printRadian(3*Math.PI/2).should.equal('3π/2');
	});
	it('converts 2*Math.PI to 2π', function(){
		anglePrinter.printRadian(2*Math.PI).should.equal('2π');
	});
	it('converts Math.PI/2 to π/2', function(){
		anglePrinter.printRadian(Math.PI/2).should.equal('π/2');
	});
	it('converts -Math.PI/2 to -π/2', function(){
		anglePrinter.printRadian(-Math.PI/2).should.equal('-π/2');
	});
	it('converts Math.PI to π', function(){
		anglePrinter.printRadian(Math.PI).should.equal('π');
	});
	it('converts -Math.PI to -π', function(){
		anglePrinter.printRadian(-Math.PI).should.equal('-π');
	});
});

describe('#printDegrees', function(){
	it('converts 270 to 270°', function(){
		anglePrinter.printDegrees(270).should.equal('270°');
	});
	it('converts 360 to 360°', function(){
		anglePrinter.printDegrees(360).should.equal('360°');
	});
	it('converts 90 to 90°', function(){
		anglePrinter.printDegrees(90).should.equal('90°');
	});
	it('converts -90 to -90°', function(){
		anglePrinter.printDegrees(-90).should.equal('-90°');
	});
	it('converts 180 to 180°', function(){
		anglePrinter.printDegrees(180).should.equal('180°');
	});
	it('converts -180 to -180°', function(){
		anglePrinter.printDegrees(-180).should.equal('-180°');
	});
});