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

function passGen() {
	var char_List = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-[]}{";
	var arr = [""];
	var len = char_List.length;
	var num = prompt("enter length of password: ");
	for (var i  = 0; i < num; i++){
		arr += char_List.charAt(Math.floor(Math.random() * len ));
	}

	alert(arr);

}

function weekendCheck() {
	var day = "";
	//day = new Date().toJSON();
	//console.log(day);
	var inp = prompt("enter a date in this format Month DD, YYYY", 'Aug 18, 2018');
	var chk = new Date(inp);
	//console.log(chk.getDay());
	var wEnd = chk.getDay();
	console.log(wEnd);
	if (wEnd == 6 || wEnd == 0){
		day = "WEEKEND!!!"; 
	}
	else {
		day = "not a weekend";
	}
	alert(day);
}

function quoteGen() {
	var quotes = [
		'"It does not matter how slowly you go as long as you do not stop. " - Confucius',
		 '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison',
		'"Be yourself; everyone else is already taken." - Oscar Wilde',
		'"Age is an issue of mind over matter. If you don`t mind, it doesn`t matter." - Mark Twain',
		'"A champion is defined not by their wins but by how they can recover when they fall." - Serena Williams',
		'"No matter what people tell you, words and ideas can change the world." - Robin Williams',
		'"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
				]
	var pQuote = quotes[Math.floor(Math.random() * quotes.length )]; 
	//console.log(quotes[6]);
	//alert(pQuote);
	document.getElementById('displ').innerHTML = pQuote;
}

function primeNumChk() {
	var inputNum = prompt("enter a number greater than 0");
	var res = "";

	for (var i = 2; i< inputNum; i++){
		//alert(inputNum % i);
		if (inputNum % i == 0){
			res = "not prime; \n divisible by " + i;
			break;
		}
		else{
			res = "prime";
		}
	}


	document.getElementById('prim').innerHTML = "The number is " + res;
}

function factorial() {
	inputNum = prompt("enter a number");
	var nums = [inputNum + "! = "];
	for (var i = inputNum; i>= 1; i--) {
		nums +=i;
		if (i == 1){
			break;
		} 
		nums += "*";

	}
	document.getElementById('factDisp').innerHTML = nums;
}

