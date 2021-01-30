var stop = false;
var frameCount = 0;
//var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;

startAnimating(30);

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
            var fixedNum = gameData.trainees.toFixed(2);
            var fixedLines = gameData.lines.toFixed(2);
            gameData.lines += gameData.mps / multiplier / 30;
            gameData.trainees += gameData.traineeIncrease / multiplier / 30;
            document.getElementById("output3").innerHTML = fixedNum + " trainees";
            document.getElementById("output4").innerHTML = fixedLines + " Lines";
            //monkeyEmployerFunc();
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

    lines: 0,

    moneyPerClick: 1,

    upgradeCost: 10,

    upgradeCost2: 100,

    monkeyTraineeCost: 2,

    monkeyEmployerCost: 100,

    mps: 0.1,

    monkeyWriter: 0,

    monkeyTraineeValue: 0.1,

    monkeyEmployer: 0,

    trainees: 30,

    monkeyWriterCost: 20,

    monkeyWriterValue: 0.1,

    monkeyTrainerCost: 10,

    traineeIncrease: 0.07,
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

//This updates some values every 50 milliseconds
function updater() {
    var fixedNum = gameData.monkeyWriterCost.toFixed(2);
    var fixedNum2 = gameData.monkeyTrainerCost.toFixed(2);
    document.getElementById("output2").innerHTML = "Monkey Writer: " + fixedNum + " Trainees";
    document.getElementById("output5").innerHTML = "Monkey Trainer: " + fixedNum2 + " Lines";
    document.getElementById("autoClick").innerHTML = "LpS: " + prettify(gameData.mps);
    //document.getElementById("output3").innerHTML = gameData.trainees + " Trainees" + " Trainee Increase: " + gameData.traineeIncrease;
}
setInterval(updater, 50);

//This increases the value my for loop (the loop runs once every second) uses by a value which i want to be incremented by upgrades implemented later. Right now it just happens to be 0.1
function monkeyTraineeFunc() {
    if (gameData.lines >= gameData.monkeyTraineeCost) {
        gameData.lines -= gameData.monkeyTraineeCost;
        gameData.monkeyTraineeCost = gameData.monkeyTraineeCost * 1.15;
        gameData.trainees += gameData.monkeyTraineeValue;
    }
}

function monkeyWriterFunc() {
    if (gameData.trainees >= gameData.monkeyWriterCost) {
        gameData.trainees -= gameData.monkeyWriterCost;
        gameData.monkeyWriterCost = gameData.monkeyWriterCost * 1.15;
        gameData.monkeyWriter += gameData.monkeyWriterValue;
        gameData.mps += gameData.monkeyWriter;
    }
}

function monkeyTrainerFunc() {
    if (gameData.lines >= gameData.monkeyTrainerCost) {
        gameData.lines -= gameData.monkeyTrainerCost;
        gameData.monkeyTrainerCost *= 1.15;
        gameData.traineeIncrease += 0.07;
    }
}

function monkeyEmployerFunc() {
    gameData.mps += gameData.monkeyEmployer * gameData.monkeyWriterValue / 10000;
}

function monkeyEmployerFunc2() {
    if (gameData.lines >= gameData.monkeyEmployerCost) {
        gameData.lines -= gameData.monkeyEmployerCost;
        gameData.monkeyEmployer += 1;
    }
}

let multiplier = 10;
let i = 0

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("moneySave", JSON.stringify(gameData))
    console.log("saved");
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("moneySave"))
if (saveGame !== null) {
    gameData = saveGame
}

//This right here is the world's shittiest way of wiping a save. It doesn't even wipe it, it just resets the values to what they originally were through mediocre means
function wipeSave() {
    localStorage.removeItem("moneySave");
    gameData.lines -= gameData.lines;
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