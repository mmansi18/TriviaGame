//stop watch
function stopWatch(){
    var count = 25;
    var counter = setInterval(timer, 1000);

    function timer(){
        count = count -1;
        if (count <=0){
            clearInterval(counter);
            //alert("time's up!");
            return;
        }
        document.getElementById("timer").innerHTML = count;
    }
}

function startGame(){
  stopWatch();
}

startGame();