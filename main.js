var gameData = {
    money: 1000000,
    moneyPerClick: 1,
    upgradeCost: 10,
    upgradeCost2: 100,
    upgradeCost3: 15,
    clickTime: 1000,
    //autoClickers: 1,
    moneyPerSec: 1,
    mps: 0.1
}

function Upgrade1 (upgradeCost1, increment) {
    this.upgradeCost = upgradeCost1;
    this.increaseMoney = increment;
    this.interval = function () {
        window.setInterval(function () {
            gameData.money += this.increaseMoney;
        }, 1000);
    };
}


//This function
function autoClickFunc1() {
    if (gameData.money >= Upgrade1.upgradeCost) {
        gameData.money -= Upgrade1.upgradeCost;
        //gameData.mps += 0.1;
        var upgrader = new Upgrade1(10, 10);
    }
}

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function autoClickFunc2() {
    gameData.money += gameData.mps;
}



//This function increases money by whatever moneyPerClick is, everytime you press the button
function clickFunction() {
    gameData.money += gameData.moneyPerClick,
    document.getElementById("output").innerHTML = "You've typed " + prettify(gameData.money) + " Lines";
}

//this increases moneyPerClick by one if you have enough money to buy the upgrade
function increaseClickMoney() {
    var upgradeIncrease = (70/100) * gameData.upgradeCost;
    if (gameData.money >= gameData.upgradeCost) {
        gameData.money -= gameData.upgradeCost,
        gameData.moneyPerClick++,
        gameData.upgradeCost += upgradeIncrease;
        gameData.upgradeCost = Math.round(gameData.upgradeCost);
    }
}

//This updates some values every 50 milliseconds
function updater() {
    document.getElementById("output").innerHTML = "You've typed " + prettify(gameData.money) + " Lines";
    document.getElementById("test").innerHTML = "Upgrade Cost: " + gameData.upgradeCost + " " + gameData.upgradeCost3// + " " + gameData.upgradeCost3;
    document.getElementById("autoClick").innerHTML = "LpS: " + prettify(gameData.mps);
}

setInterval(updater, 50);

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("moneySave", JSON.stringify(gameData))
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("moneySave"))
if (saveGame !== null) {
    gameData = saveGame
}

//This right here is the world's shittiest way of wiping a save. It doesn't even wipe it, it just resets the values to what they originally were through mediocre means
function wipeSave() {
    localStorage.removeItem("moneySave");
    gameData.money -= gameData.money;
    gameData.moneyPerClick -= gameData.moneyPerClick;
    gameData.moneyPerClick += 1;
    gameData.upgradeCost -= gameData.upgradeCost
    gameData.upgradeCost += 10;
    gameData.upgradeCost2 -= gameData.upgradeCost2;
    gameData.upgradeCost2 += 100;
    gameData.upgradeCost3 -= gameData.upgradeCost3;
    gameData.upgradeCost3 += 15;
    gameData.autoClickers -= gameData.autoClickers;
}

window.onload = autoClickFunc2();