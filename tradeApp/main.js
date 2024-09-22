let percentage = 0;
let budget = 0;
let profit1 = "";
let profit2 = "";
let range = 0;
let rangeUp = 0;
let rangeDown = 0;
let interval;
function updateDisplay() {
    document.getElementById('percentage').innerText = percentage + "%";
}

function increasePercentage() {
    if (percentage < 100) {
        percentage += 1;
        updateDisplay();
    }
    console.log(percentage)
}

function decreasePercentage() {
    if (percentage > 0) {
        percentage -= 1;
        updateDisplay();
    }
    console.log(percentage)
}




function updateDisplay2() {
    document.getElementById('budget').innerText = budget + "$";
}

function increaseBudget() {
    if (budget < 100000) {
        budget += 500;
        updateDisplay2();
    }
    console.log(percentage)
}

function decreaseBudget() {
    if (budget > 0) {
        budget -= 500;
        updateDisplay2();
    }
}



function updateDisplay3() {
    document.getElementById('profit1').innerText = profit1 + "$";
    document.getElementById('profit2').innerText = profit2 + "$";
    document.getElementById('rangeUp').innerText = rangeUp + "$";
    document.getElementById('rangeDown').innerText = rangeDown + "$";
}





function profit(){
   let getPercentageProfit =  percentage / 100 * budget; 
   profit1="+" +( getPercentageProfit + budget ) +"$ / " + "+"+getPercentageProfit;
   profit2="-"+ (getPercentageProfit - budget )+"$ / " + "-"+ getPercentageProfit;
  
   let getPercentageRange=  percentage / 100 * range;
   rangeUp = getPercentageRange + range;
   rangeDown = getPercentageRange - range;
 
   updateDisplay3()
} 




function updateDisplay4() {
    document.getElementById('range').innerText = range + "$";

}

function increaseRange() {
    interval = setInterval(function() {
        range++;
        updateDisplay4();
    }, 80);
}

function decreaserange() {
    interval = setInterval(function() {
        range--;
        updateDisplay4();
    }, 100);
}
function stop() {
    clearInterval(interval); 
}

