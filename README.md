# angle-printer
Pretty print radians and degrees. Also converts between them.

## Installation

angle-printer is available through [npm](https://www.npmjs.com/package/angle-printer)

`npm install angle-printer`

## Usage

```javascript
var anglePrinter = require('angle-printer');

anglePrinter.toRadians(270) // "3π/2"
anglePrinter.toRadians(-90) // "-π/2"

anglePrinter.toDegrees(3*Math.PI/2) // "270°"
anglePrinter.toDegrees(-Math.PI/2) // "-90°"

anglePrinter.printRadians(3*Math.PI/2) // "3π/2"
anglePrinter.printRadians(-Math.PI/2) // "-π"

anglePrinter.printDegrees(270) // "270°"
anglePrinter.printDegrees(-90) // "-90°"

```

Radians are rad, let's show them some love <3
