var gameData = {
    money: 0,
    moneyPerClick: 1,
    upgradeCost: 10,
    upgradeCost2: 100,
    upgradeCost3: 150,
    clickTime: 1000,
    autoClickers: 0
}


//This currently just constantly increases money by moneyPerClick once every second. Make this an upgrade

//TRY TO MAKE AUTOCLICKFUNC A FUNCTION STORED IN A VARIABLE. Alright that wont actually change much, so find some other way to decrease clickTime

function autoClickFunc() {
    var upgradeIncrease = (70/100) * gameData.upgradeCost3;
    if (money >= gameData.upgradeCost3) {
        gameData.upgradeCost3 += upgradeIncrease;
        window.setInterval(function() {
        clickFunction()
        }, this.clickTime);
        autoClickers++;
       gameData.upgradeCost3 = Math.round(gameData.upgradeCost3)
    }
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
    document.getElementById("output").innerHTML = "You have $" + gameData.money;
    document.getElementById("test").innerHTML = "Upgrade Cost: " + gameData.upgradeCost + " " + gameData.upgradeCost3// + " " + gameData.upgradeCost3;
    document.getElementById("autoClick").innerHTML = "Autoclickers: " + gameData.autoClickers;
}

setInterval(updater, 50);

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("moneySave", JSON.stringify(gameData))
}, 15)

var saveGame = JSON.parse(localStorage.getItem("moneySave"))
if (saveGame !== null) {
    gameData = saveGame
}
/* function saveGame() {
    try {
        localStorage.setItem('copperSave', JSON.stringify(gameData));
    } catch(err) {
        console.log("cannot access localStorage - browser may be old or storage may be corrupt");
    }
    console.log("Game saved successfully");
}

function loadGame() {
    var gameLoad = JSON.parse(localStorage.getItem("copperSave"));
} */
//currently the upgradeIncrease doesn't work properly. Find some way to increase upgradeCost proportionatly to moneyPerCLick

//Todo: fix decreasing the buy time on autoBuy. Implement saving(cookie clicker had a link to one, but make one yourself if you can)

//FIX THE AUTOBUY. CURRENT IDEA IS TO MAKE IT A FUNCTION SINCE THAT RUNS AND UPDATES ITS VALUES EVERYTIME ITS RUN. IF ANY VARIABLES ARE NEEDED MAKE THEM INSIDE THE FUNCTION