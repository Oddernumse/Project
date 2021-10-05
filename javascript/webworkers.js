import { gameData, multiplier } from "./module.mjs"


function tester() {
    postMessage(gameData.monkeyEmployerCost);
    for (let i=0; i < 10; i++) {
        setInterval(function(){
        let test = gameData.lines += gameData.lps / multiplier / 100;
        let test2 = gameData.trainees += gameData.traineeIncrease / multiplier / 100;

        document.getElementById("lines").innerHTML = "Lines: " + test.toFixed(2);
        document.getElementById("traineeAmount").innerHTML = "Trainees: " + test2.toFixed(2)

        }, 10);
    }
}

tester()
