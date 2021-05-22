function countdownTimer() {
    console.log("countdownTimer working");
    var currTime = 15;
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime = currTime -5;

    //Timer for 45
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownstaus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    //Timer for 40
    setTimeout(function(){
        //stuff in here happen after timeout
        Document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime -5;
    }, 10000);

    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownstatus").innerHTML = "Blastoff!";
        currTime = currTime -5;
    }, 15000);
}

function playCraps(){
    console.log("Craps game initiated");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var dieSum = die1 + die2;
    document.getElementById("dicesum").innerHTML = dicesum;
    if(diesum == 7|| diesum ==11){
        document.getElementById("crapsStatus").innerHTML = "Craps! You Lose!!";
    }else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Doubles! You win"
    }else{
        document.getElementById("crapsStatus").innerHTML = "Craps! You did not Lose and you did not win please try again";
    }

setTimeout(function(){alert("the time is"+currTime);}, 5000);
setTimeout(function(){alert("the time is"+currTime);}, 10000);
setTimeout(function(){alert("the time is"+currTime);}, 15000);
setTimeout(function(){alert("the time is"+currTime);}, 20000);
etTimeout(function(){alert("the time is"+currTime);}, 25000);
setTimeout(function(){alert("the time is"+currTime);}, 30000);
setTimeout(function(){alert("the time is"+currTime);}, 35000);
setTimeout(function(){alert("the time is"+currTime);}, 40000);
setTimeout(function(){alert("the time is"+currTime);}, 45000);
setTimeout(function(){alert("the time is"+currTime);}, 50000);

}