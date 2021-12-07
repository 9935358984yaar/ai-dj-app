song="";
leftWristX = 0;
leftWristY = 0;
rightWristY = 0;
rightWristX = 0;
function preload()
{
  song = loadSound("music.mp3");
}
function setup() 
{
   canvas=createCanvas(600,500);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   poseNet= ml5.poseNet(video,modelLoded);
   pose.on('pose',gotPoses);
}
function draw()
{
   image(video,0,0,600,500);
}
function play()
{
   song.play();
   song.setVolume(1);
   song.rate(1);
}

function  modelLoded()
{
console.log("model is loded");
}

function  gotPoses()
{
if(results.length > 0)
{
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("leftX="+leftWristX+ "leftY="+leftWristY);
console.log("rightX="+rightWristX+ "rightY="+rightWristY);
}
}
