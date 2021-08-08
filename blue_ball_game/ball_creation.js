(function(){

var noOFBalls = Math.floor(Math.random() * (1 - 50) + 50);
var blueBall = Math.floor(Math.random() * (1 - noOFBalls) + noOFBalls);
var attemptsAllowed = 3;
var attempts = 0;
console.log(blueBall);
document.getElementById("attempts").innerHTML = attemptsAllowed;
createBalls();

function createBalls(){
    for(var i = 0; i < noOFBalls; i++){
        var button= document.createElement("button");
        button.setAttribute("id",i);
        button.appendChild(document.createTextNode(i));
        button.className = 'styleJsButtons'; 
        button.addEventListener("click",ballSelected);
        console.log(document.getElementById("balls"));
        document.getElementById("balls").appendChild(button);
        
    }
}

function displayAttempts(){
    document.getElementById("attempts").innerHTML = attemptsAllowed - attempts;
}

function ballSelected(e){
    ballNo = e.target.id;
    if((attempts+1) == attemptsAllowed  && blueBall != ballNo){
        setTimeout(function(){
            alert("You could not find the blue ball. Play Again!!!!");
        }, 20) 
        setTimeout(function(){
            window.location = "index.html"
        },30)       
    }
    attempts += 1;
   
    displayAttempts();
    checkAttempts(ballNo);
}

function checkAttempts(ballNo){
    if(attempts <= attemptsAllowed){
        checkBalls(ballNo);
    }
    
}

function checkBalls(ballNo){
    if(ballNo != blueBall){
        var btnClicked = (ballNo > blueBall) ? colorBallGreen(ballNo) : colorBallRed(ballNo);
        return;
    }
    colorBallBlue(ballNo);   
}

function colorBallGreen(ballNo){
    document.getElementById(ballNo).style.backgroundColor = 'Green';
}

function colorBallRed(ballNo){
    document.getElementById(ballNo).style.backgroundColor = 'Red';
}

function colorBallBlue(ballNo){
    document.getElementById(ballNo).style.backgroundColor = 'blue';
    setTimeout(function(){
        alert("You won the Game");
    }, 20)
    setTimeout(function(){
        window.location = "index.html"
    },30)   
}
})();
