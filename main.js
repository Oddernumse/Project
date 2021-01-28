var stop = false;
var frameCount = 0;
//var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;

startAnimating(60);

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    console.log(startTime);
    animate();
}


function animate() {

    // stop
    if (stop) {
        return;
    }

    // request another frame

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);

        // draw stuff here
        for (i=0; i < multiplier; i++) {
            var fixedMoney = gameData.money.toFixed(2);
            gameData.money += gameData.mps / multiplier / 60;
            document.getElementById("output").innerHTML = "You've typed " + fixedMoney + " Lines";
        }

        // TESTING...Report #seconds since start and achieved fps.
        var sinceStart = now - startTime;
        var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
        //$results.text("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");

    }
}


/* 
============================================================================================================================================================================================================================
THE CODE ABOVE ONLY EXISTS TO LIMIT THE FPS AT WHICH THE THINGS DRAWN IN THE SPECIFIED SECTION WILL RUN. IT SHOULD NOT BE USED FOR LITERALLY ANYTHING ELSE. I WILL ONLY PUT THINGS IN THERE THAT ABSOLUTELY NEED TO BE THERE
============================================================================================================================================================================================================================
*/


var gameData = {
    money: 0,
    moneyPerClick: 1,
    upgradeCost: 10,
    upgradeCost2: 100,
    monkeyWriterCost: 15,
    clickTime: 1000,
    mps: 0,
    monkeyWriter: 0,
    monkeyWriterValue: 0.1
}

/*var test ={
    monkeyWriterValue: 0.1
}*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
}

//Use this function on any number with rogue decimals
function prettify(input) {
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

//This function increases money by whatever moneyPerClick is, everytime you press the button
function clickFunction() {
    gameData.money += gameData.moneyPerClick,
    document.getElementById("output").innerHTML = "You've typed " + prettify(gameData.money) + " Lines";
}

//This updates some values every 50 milliseconds
function updater() {
    var fixedNum = gameData.monkeyWriterCost.toFixed(2);
    document.getElementById("test").innerHTML = "Upgrade Cost: " + gameData.upgradeCost + " " + fixedNum;
    document.getElementById("autoClick").innerHTML = "LpS: " + prettify(gameData.mps); 
}
setInterval(updater, 50);

//This increases moneyPerClick by 1, and then increases upgradeCost by 70%
function increaseClickMoney() {
    var upgradeIncrease = (70/100) * gameData.upgradeCost;
    if (gameData.money >= gameData.upgradeCost) {
        gameData.money -= gameData.upgradeCost,
        gameData.moneyPerClick++,
        gameData.upgradeCost += upgradeIncrease;
        gameData.upgradeCost = Math.round(gameData.upgradeCost);
    }
}

//This increases the value my for loop (the loop runs once every second) uses by a value which i want to be incremented by upgrades implemented later. Right now it just happens to be 0.1
function monkeyWriterFunc() {
    if (gameData.money >= gameData.monkeyWriterCost) {
        gameData.money -= gameData.monkeyWriterCost;
        gameData.monkeyWriterCost = gameData.monkeyWriterCost * 1.15;
        gameData.monkeyWriter += gameData.monkeyWriterValue;
        gameData.mps += gameData.monkeyWriterValue//gameData.monkeyWriter;
        //var upgrader = new Upgrade1(10, 10);
    }
}

function monkeyEmployerFunc() {
    //this is just a reminder to make this thing work at some point
}

let multiplier = 10;
let i = 0

/*var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("moneySave", JSON.stringify(gameData))
    console.log("saved");
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("moneySave"))
if (saveGame !== null) {
    gameData = saveGame
}*/

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
    gameData.monkeyWriterCost -= gameData.monkeyWriterCost;
    gameData.monkeyWriterCost += 15;
    gameData.autoClickers -= gameData.autoClickers;
    gameData.mps -= gameData.mps;
    //gameData.mps += 1;
}