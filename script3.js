var backgroundmusicSound = new Audio("bgmusic2.mp3");
var runSound = new Audio("run.mp3");
var jumpSound = new Audio("jump.mp3")
var winSound = new Audio("winmusic.mp3");
var gameoverSound = new Audio("gameovermusic.mp3");

function myFunction() {
    alert("Use headphones for a better sound experience!\n\nIf sounds do not play automatically, you can refresh your web browser.\n\nInstructions :\n\n > Press 'Enter' button to start the game.\n\n > Press 'Space' button to jump.\n\n > Press 'Ok' to Continue.");
}

function controller(event){
    
    if(event.key == "Enter"){
        if(runWorker == 0){
            backgroundmusicSound.play(); 
            run();
            runSound.play();
            moveBackround();
            updateScore();
            bombMargins.forEach(bombCreateAndMove);
            
        }
    }

    if(event.key == " "){
        if(jumpWorker == 0){
            if(runWorker != 0){
                clearInterval(runWorker);
                runSound.pause();
                jump();
                jumpSound.play();
            }
        }
    }
}

var runImage = 1;
var runWorker = 0;

runSound.loop = true
backgroundmusicSound.loop = true

function run(){

    runWorker = setInterval(
        ()=>{

            runImage = runImage + 1;

            if (runImage == 11){
                runImage=1; 
            }
        
            document.getElementById("boy").src= "run"+runImage+".png";

        },90
    );
}


var backgroundX= 0;
var backgroundWorker = 0;


function moveBackround(){

    backgroundWorker = setInterval(
        ()=>{

            backgroundX = backgroundX - 10;
            
            document.getElementById("background").style.backgroundPositionX = backgroundX+"px";

        },20
    );
}

var score = 0;
var scoreWorker = 0;

function updateScore(){

    scoreWorker = setInterval(
        ()=>{
            score = score + 10;
            document.getElementById("score").innerHTML= score;

            if(score == 4700){
                backgroundmusicSound.pause();
                winSound.play();
                score = score - 10;

                document.getElementById("win").style.visibility = "visible";
                document.getElementById("endscore").innerHTML = score;
                 
            }

        },100
    );
}

var jumpImage = 1;
var jumpWorker = 0;

var jumpTop = 320;

function jump() {

    jumpWorker = setInterval(
        () => {
            
            jumpImage = jumpImage + 1;

            if(jumpImage<7){
                jumpTop = jumpTop - 40;
                document.getElementById("boy").style.marginTop = jumpTop+"px";
            }

            if(jumpImage>6){
                jumpTop = jumpTop + 40;
                document.getElementById("boy").style.marginTop = jumpTop+"px";
            }

            if (jumpImage == 11){
                jumpImage = 1;
                clearInterval(jumpWorker);
                run();
                runSound.play();
                jumpWorker = 0;
            }

            document.getElementById("boy"). src="jump"+jumpImage+".png";
        },100
    );
}

var bombMargins = [2000,5000,6000,7000,10000,11500,14000,15000,15500,17500,20000,21000,22000,22700,26000,27000,27500,30500];
var bombWorker = 0;
var gameOver = false;

function bombCreateAndMove(x) {

    var imgTag = document.createElement("img");
    
    imgTag.src = "trap3.gif";
    imgTag.className = "trap";
    imgTag.style.marginLeft = x+"px";
    document.getElementById("background").appendChild(imgTag);

    bombWorker = setInterval(
        ()=>{

            if(gameOver == false){
                x = x - 10;
                imgTag.style.marginLeft = x+"px";
            }

            if(x == 160){
                if(jumpWorker == 0){
                    gameOver = true;
                    clearInterval(runWorker);
                    runSound.pause();
                    clearInterval(scoreWorker);
                    clearInterval(backgroundWorker);
                    gameoverSound.play(); 
                    dead();
                }
            }
        },15
    );
}

var deadImage = 1;
var deadWorker = 0;


function dead() {
    deadWorker = setInterval(
        ()=>{
            deadImage = deadImage + 1;

            if(deadImage == 11){
                deadImage = 10;
                clearInterval(deadWorker);
                backgroundmusicSound.pause();
                
                document.getElementById("end").style.visibility = "visible";
                document.getElementById("endscore").innerHTML = score;     
            }

            document.getElementById("boy").src = "dead"+deadImage+".png";
           
        },120
    );
}

function reload() {
    location.reload();
} 

document.addEventListener('DOMContentLoaded', function() {
    // Wait for DOM content to load
    const content = document.querySelector('.content');

    // Simulate page loading
    setTimeout(function() {
        // Hide loading circles
        document.querySelector('.loader-wrapper').style.display = 'none';

        // Fade in content
        content.classList.remove('hidden');
        content.style.opacity = '1';
    }, 2000); // Adjust the delay in milliseconds (e.g., 2000 for 2 seconds)
});
