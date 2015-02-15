var Game_List = "[/n " + [
	'{"name" : "Final Fantasy", "Genre" : "RolePlaying", "Main Character" : "Light Warriors", "Year Released" : "1987", "Main Bad Guy" : "Chaos"}',
	'{"name" : "Final Fantasy II", "Genre" : "RolePlaying", "Main Character" : "Firion", Year Released" : "1988", "Main Bad Guy" : "Borghen, The Emperor"}',
	'{"name" : "Final Fantasy III", "Genre" : "RolePlaying", "Main Character" : "The Four Orphans", "Year Released" : "1990", "Main Bad Guy" : "Cloud of Darkness"}', 
	'{"name" : "Final Fantasy IV", "Genre" : "RolePlaying", "Main Character" : "Cecil Harvey", "Year Released" : "1991", "Main Bad Guy" : "Zemus"}',
	'{"name" : "Final Fantasy V", "Genre" : "RolePlaying", "Main Character" : "Bartz Klauser", "Year Released" : "1992", "Main Bad Guy" : "Exdeath"}',
	'{"name" : "Final Fantasy VI", "Genre" : "RolePlaying", "Main Character" : "Terra Branford", "Year Released" : "1994", "Main Bad Guy" : "Kefka Palazzo"}',
	'{"name" : "Final Fantasy VII", "Genre" : "RolePlaying", "Main Character" : "Cloud Strife", "Year Released" : "1997", "Main Bad Guy" : " Sephiroth}',
	'{"name" : "Final Fantasy VIII", "Genre" : "RolePlaying", "Main Character" : "Squall Leonhard", "Year Released" : "1999", "Main Bad Guy" : "Ultimecia"}',
	'{"name" : "Final Fantasy IX", "Genre" : "RolePlaying", "Main Character" : "Zidane Tribal", "Year Released" : "2000", "Main Bad Guy" : "Kuja"}',
	'{"name" : "Final Fantasy X", "Genre" : "RolePlaying", "Main Character" : "Tidus", "Year Released" : "2001", "Main Bad Guy" : "Sin"}',
	'{"name" : "Final Fantasy X-2", "Genre" : "RolePlaying", "Main Character" : "Yuna", "Year Released" : "2003", "Main Bad Guy" : "Shuyin"}',
	'{"name" : "Final Fantasy XII", "Genre" : "RolePlaying", "Main Character" : "Vaan", "Year Released" : "2006", "Main Bad Guy" : "Vayne Soildor"}',
	'{"name" : "Final Fantasy XIII", "Genre" : "RolePlaying", "Main Character" : "Lightning Farron", "Year Released" : "2009", "Main Bad Guy" : "Barthandelus"}',
	'{"name" : "Final Fantasy XIII-2", "Genre" : "RolePlaying", "Main Character" : "Sarah Farron and Noel Kreiss", "Year Released" : "2013", "Main Bad Guy" : "Caius Ballad"}',
	'{"name" : "Final Fantasy XIII: Lightning Returns", "Genre" : "RolePlaying", "Main Character" : "Lightning Farron", "Year Released" : "2014", "Main Bad Guy" : "God"}',
	'{"name" : "Call of Duty", "Genre" : "FirstPerson Shooter", "Main Character" : "Joe Martin", "Year Released" : "2003", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty: Finest Hour", "Genre" : "FirstPerson Shooter", "Main Character" : "Aleksandr Sokolov", "Year Released" : "2004", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty 2", "Genre" : "FirstPerson Shooter", "Main Character" : "Vasili Koslov", "Year Released" : "2005", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty 3", "Genre" : "FirstPerson Shooter", "Main Character" : "Private Nichols", "Year Released" : "2006", "Main Bad Guy" ; "N/A"}',
	'{"name" : "Call of Duty 4: Modern Warfare", "Genre" : "FirstPerson Shooter", "Main Character" : "John "Soap" MacTavish", "Year Released" : "2007", "Main Bad Guy" : "Imran Zakhaev"}',
	'{"name" : "Call of Duty World at War", "Genre" : "FirstPerson Shooter", "Main Character" : "C. Miller", "Year Released" : "2008", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty: Modern Warfare 2", "Genre" : "FirstPerson Shooter", "Main Character" : "Joesph Allen", "Year Released" : "2009", "Main Bad Guy" : "Vladimir Makarov"}',
	'{"name" : "Call of Duty: Black Ops", "Genre" : "FirstPerson Shooter", "Main Character" : "Alex Mason", "Year Released" : "2010", "Main Bad Guy" : "Dragovich"}',
	'{"name" : "Call of Duty: Modren Warfare 3", "Genre" : "FirstPerson Shooter", "Main Character" : "John "Soap" MacTavish", "Year Released" : "2011", "Main Bad Guy" : "Vladimir Makarov"}',
	'{"name" : "Call of Duty: Black Ops II", "Genre" : "FirstPerson Shooter", "Main Character" : "Alex Mason", "Year Released" : "2012", "Main Bad Guy" : "Raul Menendez"}',
	'{"name" : "Call of Duty: Ghosts", "Genre" : "FirstPerson Shooter", "Main Character" : "Logan and David Walker", "Year Released" : "2013", "Main Bad Guy" : "Gabriel Rorke"}',
	'{"name" : "Call of Duty: Advanced Warfare", "Genre" : "FirstPerson Shooter", "Main Character" : "Jack Mitchell", "Year Released" : "2014", "Main Bad Guy" : "Johnathan Irons "}',

	//This Makes sure the data is exported innode.js -
	//require (./path/to/GameList.js) Will get you the array
	if (typeof module !- "undefined" && module.exports)
		module.exports = Game_List
