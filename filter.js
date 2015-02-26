var data = require('./GameList.js');
var GameList = JSON.parse(data);
function filter(array, test) {
	var passed [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]);
			passed.push(array[i]);
	}

	return passed;

}

print(JSON.stringify(filter(GameList, function(game) {
	return game.YearReleased > 2008;
})));


