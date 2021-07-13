noseX=0;
noseY =0;
function preload() {
    crown=loadImage("lipstick.png");
    }
    function setup() {
        canvas= createCanvas(300,300);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(300,220);
        video.hide();

        poseNet=ml5.poseNet(video, modelLoaded);
        poseNet.on('pose',gotPoses);
    }
    function modelLoaded() {
        console.log('poseNet is initialized');
    }
    function draw() {
        image(video,0,0,300,220);
 image(crown,noseX-15,noseY+6,30,25);
    }
    function take_snapshot(params) {
        save('lipstick.png');
    }
    function gotPoses(results) {
        if (results.length>0) {
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("nose x="+results[0].pose.nose.x);
            console.log("nose y="+results[0].pose.nose.y);
            console.log("nose x="+noseX);
            console.log("nose y="+noseY);
        }
    }
    
    