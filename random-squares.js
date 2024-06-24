const frameWidth = 125
const frameHeight = 125
const frame = [
  [0, 0],
  [frameWidth, 0],
  [frameWidth, frameHeight],
  [0, frameHeight],
  [0, 0]
]

setDocDimensions(frameWidth, frameHeight)

function createSquare(width, height) {
  let square = [
    [0, 0],
    [width, 0],
    [width, height],
    [0, height],
    [0, 0]
  ]


  bt.rotate([square], bt.randInRange(0, 360))
  bt.translate([square], [bt.randInRange(0, frameWidth), bt.randInRange(0, frameHeight)])
  bt.cut([square], [frame])
  return square
}

drawLines([frame])
drawLines([createSquare(bt.randInRange(10, 50), bt.randInRange(10, 50))])