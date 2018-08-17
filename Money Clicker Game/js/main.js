var moneyClicks = 0;
var workers = 0;
var workerCost = 10;
var workersMPS = 1;

var teamLeader = 0;
var teamLeaderCost = 25;
var teamLeaderMPS = 2;

var manager = 0;
var managerCost = 65;
var managerMPS = 5;


function moneyClicked() {
	moneyClicks++;
	console.log(moneyClicks);
}

var moneyClickerTime = setInterval(function() {
	updateMoney();

}, 100);

function updateMoney() {
	var moneyPerSecond = 0;
	moneyPerSecond = workers + (teamLeader*teamLeaderMPS) + (manager * managerMPS);
	document.getElementById("workerCost").innerHTML = workerCost + "$";
	document.getElementById("moneyPerSec").innerHTML = moneyPerSecond + "$/sec";
	document.getElementById("moneyAmount").innerHTML = moneyClicks + "$";
	document.getElementById("numberOfWorkers").innerHTML = workers + " Workers";

	document.getElementById("teamLeaderCost").innerHTML = teamLeaderCost + "$";
	document.getElementById("numberOfTeamLeader").innerHTML = teamLeader + " Team Leaders"

	document.getElementById("managerCost").innerHTML = managerCost + "$";
	document.getElementById("numberOfManager").innerHTML = manager + " Managers";
}



function getStaff(items, cost) {
	if (moneyClicks >= window[cost]) {
		window[items]++;
		moneyClicks -= window[cost];
		window[cost] = Math.round(window[cost] * 1.15);
	}
	else {
		alert('not enough money');
	}
}
/*
function getWorker() {
	if (moneyClicks >= workerCost){
		workers++;
		moneyClicks -= workerCost;
		workerCost = Math.round(workerCost *1.15);
	}
	else {
		alert("not enough money");
	}
}

function getTeamLeader() {
	if (moneyClicks >= teamLeaderCost) {
		moneyClicks -= teamLeaderCost;
		teamLeader++;
		teamLeaderCost = Math.round(teamLeaderCost * 1.15);
	}
	else {
		alert("not enough money");
	}
}

function getManager() {
	if (moneyClicks >= managerCost) {
		moneyClicks -= managerCost;
		manager++;
		managerCost = Math.round(managerCost * 1.15);
	}
	else {
		alert("not enough money");
	}
}

*/

var moneyProducerTimer = setInterval(function() {
	moneyProducers();
}, 1000);


//The amount of money produced per second is generated here
function moneyProducers() {
	moneyClicks += workers;
	moneyClicks += teamLeader * teamLeaderMPS;
	moneyClicks += manager * managerMPS;

}

function popup() {
	//document.getElementById("popup-info").classList.add("visible");
	document.getElementById("popup-info").classList.toggle("visible");
}
