require('../css/style.css'); // css included through js using loaders 
let people = (require("./new1.js")); // importing another js file
let $ = require("jquery");



people.forEach(function(e,i) {
	console.log(i);
	console.log(e);
	$('#names').append('<h1>'+e.name+'</h1>')
})

// in terminal : webpack index.js bundle.js 
// in terminal : webpack index.js bundle.js --watch 
// in terminal : npm install jquery --save 
// in terminal : npm install css-loader style-loader --save-dev
