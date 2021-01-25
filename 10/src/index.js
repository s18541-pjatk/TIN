const temperature = require('./temperature.js');
const distance = require('./distance.js');

document.getElementById("convert_temperature").addEventListener('click', temperature.convert);
document.getElementById("convert_distance").addEventListener('click', distance.convert);