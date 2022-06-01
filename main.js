noseX= 0;
noseY= 0;

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();

    poseNet= ml5.poseNet(img,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Intialized");
}
 function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y; 
    }
 }

function draw(){
    image(img,0,0,300,300);
    fill("black");
    rect(noseX-150, noseY-110, 20);
}
function take_snapshot(){
    save('realfilter.png')
}