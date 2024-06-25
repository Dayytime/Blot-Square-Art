// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const frameWidth = 300
const frameHeight = 300
const frame = [
  [0, 0],
  [frameWidth, 0],
  [frameWidth, frameHeight],
  [0, frameHeight],
  [0, 0]
]

setDocDimensions(frameWidth, frameHeight)

function createSquare(width, height) {
  let valid = true
  let square = [
    [0, 0],
    [width, 0],
    [width, height],
    [0, height],
    [0, 0]
  ]

  
  bt.rotate([square], bt.randInRange(0, 360))
  bt.translate([square], [bt.randInRange(0, frameWidth), bt.randInRange(0, frameHeight)])
  for (let point in square){
    if (!bt.pointInside([frame], square[point])){
      console.log(square[point])
      valid = false
      break
    }
  }
  if (valid){
    return square
    }
  else{return [[0,0]]}
}

drawLines([frame])
for(let i = 0; i <= 25; i++){
  drawLines([createSquare(bt.randInRange(10, 50), bt.randInRange(10, 50))])
}
