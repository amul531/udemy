var age = prompt("What is your age?");

function checkDriverAge(age) {
	if (Number(age) >= 18) {
		if (Number(age) === 18) {
			return "Congratulations on your first year of driving. Enjoy the ride!";
		}
		else {
			return "Powering On. Enjoy the ride!";
		}
	}
	else {
		return "Sorry, you are too yound to drive this car. Powering off";
	}

}

//run this in console log
//checkDriverAge(age);

var checkDriverAge2 = function () {
		if (Number(age) >= 18) {
		if (Number(age) === 18) {
			alert("Congratulations on your first year of driving. Enjoy the ride!")
		}
		else {
			alert("Powering On. Enjoy the ride!");
		}
	}
	else {
		alert("Sorry, you are too yound to drive this car. Powering off");
	}
}

//checkDriverAge2();
