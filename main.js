/*function gameData() {
    this.money = 100000;
    this.moneyPerClick = 1;
    this.upgradeCost = 10;
    this.upgradeCost2 = 100;
    this.upgradeCost3 = 15;
    this.clickTime = 1000;
    this.autoClickers = 1
    this.moneyPerSec = 1;
    this.mps = 0.1;
}*/

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

//let mps = 0.1;
//mps = 
//var timer = window.setInterval(function(){autoClickFunc2()}, 1000);

//This function
function autoClickFunc1() {
    if (gameData.money >= gameData.upgradeCost3) {
        gameData.money -= gameData.upgradeCost3
        gameData.mps += 0.1;
    }
}

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function autoClickFunc2() {
    window.setInterval(function() { 
    gameData.money = gameData.money + gameData.mps}, 1000);
 
} 

//This function increases money by whatever moneyPerClick is, everytime you press the button
function clickFunction() {
    gameData.money += gameData.moneyPerClick,
    document.getElementById("output").innerHTML = "You have $" + gameData.money;
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

//This is supposed to make autoBuy activate faster by a certain amount of milliseconds
/*function decreaseClickTime() {
    var upgradeIncrease = (50/100) * upgradeCost2;
    if (money >= upgradeCost2) {
        money -= upgradeCost2
        this.clickTime -= 999;
        upgradeCost2 += upgradeIncrease;
    }
} */

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

/*     var upgradeIncrease = (70/100) * gameData.upgradeCost3;
    if (gameData.money >= gameData.upgradeCost3) {
        gameData.upgradeCost3 += upgradeIncrease;
        window.setInterval(function() {
        clickFunction()
        }, gameData.clickTime);
        gameData.autoClickers++;
        gameData.upgradeCost3 = Math.round(gameData.upgradeCost3)
    } */

    //ask GreyGoose about the whole not being able to access mps in gameData thing