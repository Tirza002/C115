noseX = 0

noseY = 0

function preload_(){
narizDePalhaco = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup(){
  canvas = createCanvas(300, 300)
  canvas.center()
  video = createCapture(VIDEO)
  video.hide()
  //ativando a biblioteca ml5:
  poseNet = ml5.poseNet(video,modelLoaded)
  //ligando a biblioteca:
  poseNet.on("pose", gotPoses)
}

function draw(){
  image(video, 0, 0, 300, 300)
  image(narizDePalhaco, noseX, noseY)
}
function modelLoaded (){
  console.log("poseNet foi inicializado")
}

function gotPoses(results) {
  if (results.length>0) {
    console.log(results)
    noseX = results[0].pose.nose.x - 15
    nosey = results[0].pose.nose.y - 15
  }
}

function takeSnapshot() {
  save('meuNarizDePalhaco.png') 
}