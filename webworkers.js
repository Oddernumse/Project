import {multiplier, gameData} from "./module.js"

function tester() {
    for (let i=0; i < 100; i++) {
        var fixedNum = gameData.trainees.toFixed(2);
        var fixedLines = gameData.lines.toFixed(2);
        var test = gameData.lines += gameData.mps / multiplier / 30;
        var test2 = gameData.trainees += gameData.traineeIncrease / multiplier / 30;

        postMessage("weed");
        /*document.getElementById("output3").innerHTML = fixedNum + " trainees";
        document.getElementById("output4").innerHTML = fixedLines + " Lines";
        //monkeyEmployerFunc();*/
        setTimeout(tester,500);
    }
}

tester() 