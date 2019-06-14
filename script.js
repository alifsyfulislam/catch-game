let width = 300;
let height = 250;
let posX = 110;
let posY = height - 50;
var aPosX = 20;
var aPosY = 0;
var score =0;
var gameBox = document.querySelector('.game_box');
var ballDiv = document.querySelector('.ball_div');
var glovesDiv = document.querySelector('.gloves_div');
var selectorDiv = document.querySelector('.selector_div');
var timer = document.querySelector('#timer');
let counter = 15;


var totalScore = setInterval(function () {
    document.getElementById('write').innerText = score<10? "0"+score:score;
},1)


var slide2 = document.querySelector('.slide_2');
var interval;
selectorDiv.addEventListener('click', checkIT);
function checkIT() {
    selectorDiv.style.display = "none";
    ballDrop();
    interval = setInterval(function () {
        counter--;
        if (score>= 3 && counter < 0){
            gameBox.classList.add('hidden');
            glovesDiv.style.display= "none";
            clearInterval(totalScore);
            clearInterval(ballRmv);
            clearInterval(interval);
            slide2.classList.remove('hidden');
            slide2.classList.add('show');
            document.getElementById('time2').innerHTML = "You Take "+ score + " Catches!";
            document.getElementById('total_count').innerHTML = "In " + 15 + " Seconds!";
            document.getElementById('result').innerHTML = "Tremendous Performance!";
        }
        else if(score < 3 && counter < 0){
            gameBox.classList.add('hidden');
            glovesDiv.style.display= "none";
            clearInterval(totalScore);
            clearInterval(ballRmv);
            clearInterval(interval);
            slide2.classList.remove('hidden');
            slide2.classList.add('show');
            document.getElementById('time2').innerHTML = "You Take "+ score + " Catches!";
            document.getElementById('total_count').innerHTML = "In " + 15 + " Seconds!";
            document.getElementById('result').innerHTML = "Very Poor Attempt!";
        }
        else{
            timer.innerText=counter;
        }
    },1000)
}

var ballRmv;
function ballDrop(){
    ballRmv = setInterval(function () {
        ballDiv.style.top = aPosY+"px";
        ballDiv.style.left = aPosX+"px";
        aPosY+= 5;
        var boundaryWall = Math.abs(aPosX - posX)<=0? 10 : Math.abs(aPosX - posX);
        if ( boundaryWall<= 25 && Math.abs(aPosY - posY) <= 5){
            var aPoX = Math.random() * width;
            while(aPosX <= 25){
                aPosX++;
            }
            aPosX = Math.round(aPoX)
            while(aPosX % 25 != 0){
                aPosX--;
            }
            if (aPoX >= width){
                aPosX - 25;
            }
            aPosY = 0;
            score += 1;
        }
        if(aPosY >= height-50){
            var aPoX = Math.random() * width;
            aPosX = Math.round(aPoX)
            while(aPosX % 25 != 0){
                aPosX--;
            }
            if (aPoX >= width){
                aPosX - 25;
            }
            aPosY = 0;
        }
    },45);
}


document.onkeydown = catchBall;
function catchBall(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        if (posX<=0) {
            posX=0;
            glovesDiv.style.left = posX+"px";
        }
        else {
            posX-=20;
            glovesDiv.style.left = posX+"px";
        }
    }
    else if (e.keyCode == '39') {
        if (posX>=260) {
            posX=260;
            glovesDiv.style.left = posX+"px";
        }
        else {
            posX+=20;
            glovesDiv.style.left = posX+"px";
        }
    }

}


var leftMove = document.querySelector('.left_move');
var rightMove = document.querySelector('.right_move');

leftMove.addEventListener('click',function () {
    if (posX<=0) {
        posX=0;
        glovesDiv.style.left = posX+"px";
    }
    else {
        posX-=20;
        glovesDiv.style.left = posX+"px";
    }
});

rightMove.addEventListener('click',function () {
    if (posX>=260) {
        posX=260;
        glovesDiv.style.left = posX+"px";
    }
    else {
        posX+=20;
        glovesDiv.style.left = posX+"px";
    }
});

