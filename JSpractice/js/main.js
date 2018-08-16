function areaOfSquare() {
	var a = prompt("enter length of a side:", 4);
	var area = a*a;
	alert("Area is :"+ area);
}

function randomNum() {
	var num = prompt("enter a number from 1 - 10:", 0);
	var res = "";
	var rand = Math.ceil(Math.random() * 10);
	if (num == rand){
		res = "You guessed the number";
	}
	else{
		res = "not the right number, it was " + rand;
	}

	alert(res);
}

function dayNight() {
	var image = document.getElementById("myImg");
	var bodyElement = document.body;

	if (image.src.match("sun.png")){
		image.src = "images/moon.png";

		bodyElement.classList.add("night");
		bodyElement.classList.remove("day");
	}
	else{
		image.src = "images/sun.png";

		bodyElement.classList.add("day");
		bodyElement.classList.remove("night");
	}

}

function multiplesOfNums() {
	for (var x = 1; x<=40; x++) {
		if (x%3 ==0 && x%5 ==0){
			console.log(x +" multiple of 3 and 5");
		}
		else if (x % 5 == 0) {
			console.log(x + " multiple of 5");
		}	
		else if(x% 3 ==0){
			console.log(x + " multiple of 3");
		}
		else{
			console.log(x + "\n");
		}

	}
	
}

