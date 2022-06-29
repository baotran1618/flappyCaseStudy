var canvas = document.getElementById('myCanvas');
var bird = new Bird(50,200,60,60);
bird.draw();
bird.point();
var speed1 = 2;
var speed2 = 2;
var flag = false;
var x = 600;
var y = -Math.floor(Math.random() *100);
var pipe1 = new Pipe(x,y, 50, 200);
var x2 = pipe1.x +300;
var y2 = -Math.floor(Math.random() *100);
var pipe2 = new Pipe(x2,y2, 50, 200);
var point = 0;
var flag = false;
var scoreSound = document.getElementById('scoreSound');
var loseSound = document.getElementById('loseSound');



function birdDown(){
    if(!flag){
        checkCollision1();
        checkCollision2();
    bird.delete();
    bird.y +=10;
    bird.point();
    pipe1.drawDown();
    pipe1.drawUp();
    pipe2.drawDown();
    pipe2.drawUp();
    bird.draw();
    }
}

canvas.addEventListener('click', birdUp);
function birdUp(){
    if(!flag){
        checkCollision1();
        checkCollision2();
        bird.delete();
        bird.y -=60;
        bird.point();
        pipe1.drawDown();
        pipe1.drawUp();
        pipe2.drawDown();
        pipe2.drawUp();
        bird.draw();
    }
}
if(confirm('Are you ready?')){
    pipeMove1();
    pipeMove2();
    setInterval(birdDown, 100);
}

function createPipe1() {
    if(!flag){
        x = 600;
        y = -Math.floor(Math.random() *100);
        pipe1 = new Pipe(x,y, 50, 200);
        pipe1.drawDown();
        pipe1.drawUp();
    }
}
function pipeMove1(){
    if(!flag){
        checkCollision1();
        pipe1.delete();
        pipe1.x -=speed1 ;
        bird.point;
        pipe1.drawDown();
        pipe1.drawUp();
        pipe2.drawDown();
        pipe2.drawUp();
        bird.draw();
       requestAnimationFrame(pipeMove1);
    }
    else{
        gameOver();
    }
}
 function checkCollision1(){ 
    if(bird.y<=-10 || bird.y>=350){
        flag = true;
    }
    if((bird.x - pipe1.width <= pipe1.x && pipe1.x <=bird.x + bird.width) &&
    ((bird.y <= pipe1.y + pipe1.height) ||
    (bird.y>= pipe1.y + pipe1.height +100))){
        flag = true;
    } else if(pipe1.x+pipe1.width<=0){
        scoreSound.play();
        createPipe1();
        point++;
        if(point%5==0 && point!=0){
            speed1+=0,3;
        }
    } 
 }
 function createPipe2() {
    if(!flag){
        x2 = 600;
        y2 = -Math.floor(Math.random() *100);
        pipe2 = new Pipe(x2,y2, 50, 200);
        pipe2.drawDown();
        pipe2.drawUp();
    }
}
function checkCollision2(){ 
    if(bird.y<=-10 || bird.y>=350){
        flag = true;
    }
    if((bird.x - pipe2.width <= pipe2.x && pipe2.x <=bird.x + bird.width) &&
    ((bird.y <= pipe2.y + pipe2.height) ||
    (bird.y>= pipe2.y + pipe2.height +100))){
        flag = true;
    } else if(pipe2.x+pipe2.width<=0){
        scoreSound.play();
        createPipe2();
        point ++;
        if(point%5==0 && point!=0){
            speed2+=0,3;
        }
    }
 }
 function pipeMove2(){
    if(!flag){
        checkCollision2();
        pipe2.delete();
        pipe2.x -=speed2 ;
        bird.point();
        pipe2.drawDown();
        pipe2.drawUp();
        pipe1.drawDown();
        pipe1.drawUp();
        bird.draw();
       requestAnimationFrame(pipeMove2);
    }
    else{
        gameOver();       
    }
}
   
function gameOver(){
    loseSound.play();
        bird.ctx.fillText("GAME OVER",220,180);
        bird.ctx.fillText(point,300,230);
} 

