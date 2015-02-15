var date = require('.GameList.js');
var GameList = JSON.parse(data);
function filter(array, test0 {
	var passed = [];
	for (var i = 0, i < array.length; i++) {
		if (test(array[i]))
		passed.push(array[i]);
	}
	return passed;
}

console.log(filter(GameList, function(date) {
	return date.released > 2010 && date.released < 2014 ;
	{));

