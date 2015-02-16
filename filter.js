
load('GameList.js);
var GameList = JSON.parse(Game_List);
function filter(array, test) {
	var passed [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]);
			passed.push(array[i]);
	}

	return passed;

}

print(JSON.stringify(filter(GameList, function(date) {
	return date.released > 2008;
})));


