import { gameData, multiplier } from "./module.mjs"

//Use this function on any number with rogue decimals
function prettify(input) {
    var output = Math.round(input * 1000000) / 1000000;
    return output;
}

function tester() {
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
