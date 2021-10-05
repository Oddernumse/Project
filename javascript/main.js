//started working on this december 21st 2020
//today: february 8th 2021

import { gameData } from "./module.mjs"

let w;
if (typeof (w) == "undefined") {
    w = new Worker("webworkers.js", { type: "module" });
}

//Use this function on any number with rogue decimals
function prettify(input) {
    var output = Math.round(input * 1000000) / 1000000;
    return output;
}

//Add anything that needs to be done onclick in here
function setup() {
    document.getElementById("trainerBuy").onclick = () => monkeyTrainerFunc();
}

window.onload = setup;

function monkeyTrainerFunc() {
    if (gameData.trainees >= gameData.monkeyTrainerCost) {
        gameData.trainees -= gameData.monkeyTrainerCost;
        gameData.monkeyTrainerCost *= 1.15;
        gameData.traineeIncrease += 0.07;
        document.getElementById("tps").innerHTML = "TpS: " + gameData.traineeIncrease.toFixed(2)
        document.getElementById("trainerBuy").innerHTML = "Buy Trainer: " + gameData.monkeyTrainerCost.toFixed(2)
    }
}

/*function monkeyTraineeFunc() {
    if (gameData.lines >= gameData.monkeyTraineeCost) {
        gameData.lines -= gameData.monkeyTraineeCost;
        gameData.monkeyTraineeCost = gameData.monkeyTraineeCost * 1.15;
        gameData.trainees += gameData.monkeyTraineeValue;
        document.getElementById("traineeAmount").innerHTML = "Trainees: " + prettify(gameData.trainees)
    }
}*/

function monkeyWriterFunc() {
    if (gameData.trainees >= gameData.monkeyWriterCost) {
        gameData.trainees -= gameData.monkeyWriterCost;
        gameData.monkeyWriterCost = gameData.monkeyWriterCost * 1.15;
        gameData.monkeyWriter += gameData.monkeyWriterValue;
        gameData.lps += gameData.monkeyWriter;
    }
}



function monkeyEmployerFunc() {
    gameData.lps += gameData.monkeyEmployer * gameData.monkeyWriterValue / 10000;
}

function monkeyEmployerFunc2() {
    if (gameData.lines >= gameData.monkeyEmployerCost) {
        gameData.lines -= gameData.monkeyEmployerCost;
        gameData.monkeyEmployer += 1;
    }
}

/*var saveGameLoop = window.setInterval(function () {
    localStorage.setItem("moneySave", JSON.stringify(gameData))
    console.log("saved");
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("moneySave"))
if (saveGame !== null) {
    gameData = saveGame
}*/

//This right here is the world's shittiest way of wiping a save.
//It doesn't even wipe it, it ju  st resets the values to what they originally were through mediocre means
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
    gameData.lps -= gameData.lps;
    gameData.trainees -= gameData.trainees;
    gameData.trainees += 30;
    gameData.lps += 0.1;
    //gameData.lps += 1;
}

w.onmessage = function (event) {
    document.getElementById("lines").innerHTML = event.data;
}
