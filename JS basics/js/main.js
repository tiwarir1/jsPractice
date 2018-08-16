document.getElementById("text").innerHTML = "this is a text.";
document.getElementById("calculation").innerHTML = 5+5;
document.getElementById("example").innerHTML = 'simple quotes';

function showAlertBox() {
	alert("why you do this?");
}

function displayName(name) {
	alert("my name: " + name ); 
}

function showMessage() {
	console.log("console message");
}

function sum() {
	var number_one = 5;
	var number_two = 3;
	var sum_of_nums = number_one + number_two;

	alert("this is the sum: " + sum_of_nums);
}

function multiply(a, b) {
	var prod_of_num = a * b;

	alert("Product of the numbers is:" + prod_of_num);
}

function incrementNumner() {
	var a = 5;
	a++;
	alert(a);
}

function remainderOfDivision() {
	var a = 57;
	var rem = a % 5;
	alert("the remainder is " + rem);
}

function dataTypes() {
	res1 = 16 + 2;
	res2 = 16 + "John";
	res3 = 16 + 2 + "John";
	res4 = 16 + "John" + 2;
	res5 = "John" + 16 + 2;
	res6 = "16" + "2";

	alert("16+2=" + res1 + ";  16+'John'=" + res2 + ";  16+2+'John' =" + res3 + ";  16+'John'+2="+res4 + ";  'John'+16+2=" +res5 +";  '16'+'2'="+ res6);
}

var first = "Global variable";
function displayVariable() {
	console.log (first);
}
displayVariable(); // go to browser console, text'll appear there as Global variable

function ages() {
	var age = 18;
	if (age <= 18) {
		console.log("18 or younger");
	}
	else {
		console.log("Older than 18");
	}
}
ages();

function oddOrEven() {
	var a = 14;
	var res = "";

	if (a % 2  == 1){
		res = "odd";
	}
	else {
		res = "even";
	}

	alert(a + " is " +res);
}

function dayOfWeek() {
	var day;
	switch(new Date().getDay()){
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
	}
	alert("today is " + day);	
}

function displayArray() {
	var fruits = ["apple", "banana", "orange", "grape"];

	//var fruit1 = "apple";
	//var fruit2 = "banana";
	//var fruit3 = "orange";
	var cars = new Array("Audi", "Nissan", "BMW");

	var name = fruits[0];
	alert(name);

}


function forLoop() {
	var fruits = ["apple", "banana", "orange", "grape"];
	for (var i = 0; i<fruits.length; i++){
		alert(fruits[i]);
	}
}

function whileLoop() {
	var text = "";
	var i = 0;
	while (i< 10) {
		text += "\n the number is " + i + " ";
		i++;

	}
	alert(text);
}


function doWhileLoop() {
	var text = "";
	var i = 0;

	do {
		text += "\n the number is" + i + " ";
		i++;
	}
	while (i<10);
	alert (text);
}