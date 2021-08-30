import { gameData, multiplier } from "./module.mjs"

function tester() {
    for (let i=0; i < 10; i++) {    
        setInterval(function(){
        var fixedNum = gameData.trainees.toFixed(2);
        var fixedLines = gameData.lines.toFixed(2);
        var test = gameData.lines += gameData.mps / multiplier / 100;
        var test2 = gameData.trainees += gameData.traineeIncrease / multiplier / 100;

        postMessage(fixedLines)
        /*document.getElementById("output3").innerHTML = fixedNum + " trainees";
        document.getElementById("output4").innerHTML = fixedLines + " Lines";
        monkeyEmployerFunc();*/
        }, 10);
    }
}

tester()