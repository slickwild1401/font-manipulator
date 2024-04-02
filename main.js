function setup(){
    canvas=createCanvas(450,450);
    canvas.position(850,190);

    video=createCapture(VIDEO)
    video.size(550,550);
    video.position(50,165);
    poseNet = ml5.poseNet(video, ModelLoaded)
poseNet.on('pose',gotPoses)
}




function ModelLoaded(){
console.log("PoseNet is working")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}