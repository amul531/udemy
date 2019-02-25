var db = [ 
	{
		username: "amul531",
		password: "amul"
	},
	{
		username: "areddy",
		password: "areddy"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all this learning!"
	},
	{
		username: "Amy",
		timeline: "JavaScript is fun!"
	},
	{
		username: "Mitch",
		timeline: "Today is a good day!"
	}
];

var username = prompt("What's your username?");
var password= prompt("Whats your password?");

function isUserValid(user, pwd) {
	for (var i = 0; i < db.length; i++) {
		if (user === db[i].username && pwd === db[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pwd) {
	if(isUserValid(user,pwd)) {
		console.log(newsFeed);
	}
	else {
		alert("Sorry, worng username and password");
	}
}

signIn(username, password);