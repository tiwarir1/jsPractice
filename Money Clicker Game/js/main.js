var moneyClicks = 0;
var workers = 0;
var workerCost = 10;


function moneyClicked() {
	moneyClicks++;
	console.log(moneyClicks);
}

var moneyClickerTime = setInterval(function() {
	updateMoney();

}, 100);

function updateMoney() {
	var moneyPerSecond = 0;
	moneyPerSecond = workers;
	document.getElementById("workerCost").innerHTML = workerCost + "$";
	document.getElementById("moneyPerSec").innerHTML = moneyPerSecond + "$/sec";
	document.getElementById("moneyAmount").innerHTML = moneyClicks + "$";
}

function getWorker() {
	if (moneyClicks >= workerCost){
		workers++;
		moneyClicks -= workerCost;
		workerCost = Math.round(workerCost *1.5);
	}
	else {
		alert("not enough money");
	}
}

var moneyProducerTimer = setInterval(function() {
	moneyProducers();
}, 1000);

function moneyProducers() {
	moneyClicks += workers;

}