//started working on this december 21st 2020
//today: february 5nd 2021

import {multiplier, gameData} from "./module.js";

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


//export { multiplier /*or gamedata whichever works*/};

let w;
if (typeof (w) == "undefined") {
    w = new Worker("webworkers.js", { type: "module" });
}

w.onmessage = function (event) {
    document.getElementById("result").innerHTML = event.data;
}

var numberThing = 0;

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
    var output = Math.round(input * 1000000) / 1000000;
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
window.onload = updater;

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

let i = 0;

var saveGameLoop = window.setInterval(function () {
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
    gameData.lines += 30;
    gameData.upgradeCost -= gameData.upgradeCost
    gameData.upgradeCost += 10;
    gameData.upgradeCost2 -= gameData.upgradeCost2;
    gameData.upgradeCost2 += 100;
    gameData.monkeyWriterCost -= gameData.monkeyWriterCost;
    gameData.monkeyWriterCost += 15;
    gameData.autoClickers -= gameData.autoClickers;
    gameData.mps -= gameData.mps;
    gameData.trainees -= gameData.trainees;
    gameData.trainees += 30;
    gameData.mps += 0.1;
    //gameData.mps += 1;
}

/*
==============================================
IF YOU WANNA EDIT THE TABS CODE ITS BELOW THIS
==============================================
*/

function openTab(evt, tabName) {
    var i, tabContent, tabLinks;


    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}