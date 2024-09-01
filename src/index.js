module.exports = function reverse (n) {
let numberToStroke = n.toString();
let reverseStroke = '';
for (let i = numberToStroke.length - 1; i >= 0; i--) {
reverseStroke += numberToStroke[i];
}
return parseInt(reverseStroke);
}

