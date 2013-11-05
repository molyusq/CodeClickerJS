var stats = new Object();
stats["loc"] = 0;
stats["bug"] = 0;
stats["money"] = 0;
stats["locPerSecond"] = 0;
stats["moneyMultiplier"] = 1;
var programmersCount = 0;
var bugPercentage = 37;
var programmersMultiplier = 0.1;

function init() {
	updateStats();
	Cookies.setCookie("name", "vasyok", 365);
	
	//bugPercentage = $("#bugs").text();
}

function hireProgrammer() {
	if(stats.money >= 10*makeRound(Math.pow(1.15,programmersCount),1)) {
		stats.locPerSecond += 0.1;
		programmersCount++;
		stats.money -= 10*makeRound(Math.pow(1.15,programmersCount - 1),1);
	}
	alert(Cookies.getCookie("name"));
	updateStats();
}

window.onload = function() {
	init();
	setInterval(function() {
		stats.loc+=stats.locPerSecond;
		if (programmersCount > 0)
			bugAdd(bugPercentage - 30);		
		updateStats();		
	}, 1000);	
	setInterval(function() {
		updateStats();		
	}, 100);
}

function fixBug() {
	bugRemove(bugPercentage - 20);	
}

function makeRound(number, decimals) {
	return Math.floor(number*Math.pow(10, decimals))/Math.pow(10, decimals);	
}

function updateStats() {
	$("#prog").html(programmersCount);
	$("#lps").html(makeRound(stats.locPerSecond, 1));
	$("body>#div").html(makeRound(stats.loc, 1) + " " + stats.bug + " " + makeRound(stats.money, 1));
	//$("#locArea>div>h1").html(makeRound(stats.loc, 1));
	//$("#locArea>div>h2").html(makeRound(stats.locPerSecond, 1))
}

function clickFunction() {
	stats.loc++;
	bugAdd(bugPercentage);
	updateStats();
}
function bugChange(bugPercentage) {
	return Math.floor(Math.random()*(45 - bugPercentage) + 1) == 1;
}
function bugAdd(bugPercentage) {
	if(bugChange(bugPercentage) && Math.floor(stats.loc) > stats.bug) {		
		stats.bug++;	
	}	
}
function bugRemove(bugPercentage) {
	if(bugChange(bugPercentage) && (stats.bug != 0)) {		
		stats.bug--;	
	}	
}

function addMoney(bugMultiplier, currentBugs) {
		if (stats.bug != currentBugs && currentBugs != 0)
			stats.money += stats.moneyMultiplier/bugMultiplier;
		else stats.money += stats.moneyMultiplier;
}

function sellProject() {
		alert(1);
}

function sellLOC() {
	var currentBugs = stats.bug;
	var bugMultiplier = stats.bug == 0 ? 1 : 1.15*stats.bug;
	if(Math.floor(stats.loc) > 0) {
		if(Math.floor(stats.loc) > stats.bug) {
			stats.loc--;
			bugRemove(bugPercentage);
		}
		else {
			stats.loc--;
			stats.bug--;				
		}
		addMoney(bugMultiplier, currentBugs);
		updateStats();
	}
}
