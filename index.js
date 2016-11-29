var fs = require('fs')
var conv = require('./isopsephy')

var input_file = process.argv[2]
var hertz = ''
var thisn = 0
var total = 0

var data = fs.readFileSync(input_file)

for (var I in data) {
	thisn = conv[data[I]]
	console.log(thisn)
	total += +thisn
	hertz += thisn
}

console.log(total)

console.log(hertz)
