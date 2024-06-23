// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const frameWidth = 125
const frameHeight = 125

setDocDimensions(frameWidth, frameHeight)

function createSquare(width, height) {
  let square = [[0,0], 
                [width, 0], 
                [width, height], 
                [0, height],
                [0, 0]]
  square = bt.rotate(square, bt.randInRange(30, 350))
  return square
}


drawLines([createSquare(bt.randInRange(30, 125), bt.randInRange(30, 125))])