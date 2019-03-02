// var c = document.getElementById("myCanvas")
// var ctx = c.getContext("2d")
let colliding = false
var centerCircleX = 0;
var centerCircleY = 0;

function setup(){
  createCanvas(400,400)
  colliding = false
  centerCircleX = width/2
  centerCircleY = height/2
}

function draw(){
  // console.log(mouseX + "  " + mouseY)
  background(255)
  let centerCircle = [centerCircleX, centerCircleY]
  let mouseCircle = [mouseX, mouseY];
  let r = 50;
  colliding = checkCollision(centerCircle, mouseCircle, r)

  if(colliding){
    fill(255,0,0)
  }else{
    fill(255)

    let centerCirclePoint = getPoint(centerCircle, mouseCircle, r)
    let mouseCirclePoint = getPoint(mouseCircle, centerCircle, r)
    // console.log(centerCirclePoint + "   " + mouseCirclePoint)
    line (centerCirclePoint[0],centerCirclePoint[1],mouseCirclePoint[0],mouseCirclePoint[1])
    // let l = getLine(centerCircle, mouseCircle, r)
    // line(l[0],l[1],l[2],l[3])

  }

  ellipse(centerCircle[0],centerCircle[1],r,r)
  ellipse(mouseCircle[0],mouseCircle[1],r,r)
}

function getPoint(circleA, circleB, r){
  let cartesianDistance = Math.sqrt(Math.pow((circleB[0] - circleA[0]),2) + Math.pow((circleB[1] - circleA[1]),2))
  let C_x = circleA[0] + r * (circleB[0] - circleA[0]) / cartesianDistance / 2
  let C_y = circleA[1] + r * (circleB[1] - circleA[1]) / cartesianDistance / 2
  return [C_x,C_y]
}

// function getLine(circleA, circleB, r){
//   let deltaX = circleB[0] - circleA[0]
//   let deltaY = circleB[1] - circleA[1]
//
//   let l = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
//   let rl = r / l
//
//   let x1prime = circleA[0] - deltaX * rl
//   let x2prime = circleB[0] - deltaX * rl
//   let y1prime = circleA[1] - deltaY * rl
//   let y2prime = circleB[1] - deltaY * rl
//   return[x1prime,y1prime,x2prime,y2prime]
// }

function checkCollision(centerCircle, mouseCircle, r){
  let distance = Math.sqrt(Math.pow((centerCircle[0] - mouseCircle[0]),2) + Math.pow(centerCircle[1] - mouseCircle[1],2))
  if(distance <= r){
    return true
  }
  return false
}

// function mapPoint(p){
//   return [map(p[0], width, 0, 0 - width/2, width - width/2), map(p[1], height, 0, 0 - height/2, height - height/2)]
// }
//
// function unmapPoint(p){
//   return [map(p[0], 0 - width/2, width - width/2, width, 0),map(p[1], 0 - height/2, height - height/2, height, 0)]
// }
