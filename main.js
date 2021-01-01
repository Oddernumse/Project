//var gameData = {
var money = 0;
var moneyPerClick = 1;
var upgradeCost = 10;
var upgradeCost2 = 100;
var upgradeCost3 = 150;
var clickTime = 1000;
var autoClickers = 0;



//This currently just constantly increases money by moneyPerClick once every second. Make this an upgrade

//TRY TO MAKE AUTOCLICKFUNC A FUNCTION STORED IN A VARIABLE. Alright that wont actually change much, so find some other way to decrease clickTime

function autoClickFunc() {
    if (money >= upgradeCost3) {
        tid = window.setInterval(function() {
        clickFunction()
        }, this.clickTime);
        autoClickers++;
    }
}

//This function increases money by whatever moneyPerClick is, everytime you press the button
function clickFunction() {
    money += moneyPerClick,
    document.getElementById("output").innerHTML = "You have $" + money;
}

//this increases moneyPerClick by one if you have enough money to buy the upgrade
function increaseClickMoney() {
    var upgradeIncrease = (70/100) * upgradeCost;
    if (money >= upgradeCost) {
        money -= upgradeCost,
        moneyPerClick++,
        upgradeCost += upgradeIncrease;
        upgradeCost = Math.round(upgradeCost);
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
    document.getElementById("output").innerHTML = "You have $" + money;
    document.getElementById("test").innerHTML = "Upgrade Cost: " + upgradeCost2 + " " + upgradeCost + " " + clickTime;
    document.getElementById("autoClick").innerHTML = "Autoclickers: " + autoClickers;
}

setInterval(updater, 50);
//currently the upgradeIncrease doesn't work properly. Find some way to increase upgradeCost proportionatly to moneyPerCLick

//Todo: fix decreasing the buy time on autoBuy. Implement saving(cookie clicker had a link to one, but make one yourself if you can)

//FIX THE AUTOBUY. CURRENT IDEA IS TO MAKE IT A FUNCTION SINCE THAT RUNS AND UPDATES ITS VALUES EVERYTIME ITS RUN. IF ANY VARIABLES ARE NEEDED MAKE THEM INSIDE THE FUNCTION