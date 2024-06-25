const frameWidth = 300
const frameHeight = 300
const frame = [[
  [0, 0],
  [frameWidth, 0],
  [frameWidth, frameHeight],
  [0, frameHeight],
  [0, 0]
]]

setDocDimensions(frameWidth, frameHeight)

function createRec(width, height){
  const t = new bt.Turtle()
  t.forward(width)
  t.left(90)
  t.forward(height)
  t.left(90)
  t.forward(width)
  t.left(90)
  t.forward(height)
  return t.path
}

function createCircle(radius){
  const t = new bt.Turtle()
  t.arc(360, radius)
  console.log("circle")
  return t.path
}

function createTriangle(size){
  const t = new bt.Turtle()
  t.forward(size)
  t.left(120)
  t.forward(size)
  t.left(120)
  t.forward(size)
  console.log("triangle")
  return t.path
}

function generateShapes() {
  let randomChoice = bt.randIntInRange(1,3)
  let shape = []
  console.log(randomChoice)

  if (randomChoice == 1){
    shape = createRec(bt.randInRange(10, 50), bt.randInRange(10, 50))
  }
  else if (randomChoice == 2){
    shape = createCircle(bt.randInRange(10, 50))
  }
  else {
    shape = createTriangle(bt.randInRange(10, 50))
  }

  
  bt.rotate(shape, bt.randInRange(0, 360))
  bt.translate(shape, [bt.randInRange(0, frameWidth), bt.randInRange(0, frameHeight)])
  bt.cut(shape, frame)
  return shape
}

drawLines(frame)
for(let i = 0; i <= 20; i++){
  drawLines(generateShapes())
}