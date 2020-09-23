// game width is x 255px; y 960px;

var leftGameArrow = document.getElementById("fallingLeft")
var rightGameArrow = document.getElementById("fallingRight")
var upGameArrow = document.getElementById("fallingUp")
var downGameArrow = document.getElementById("fallingDown")
var leftStaticArrow = document.getElementById("staticArrowLeft")
// console.log(leftStaticArrow.style.marginTop)

var randomArrow 
let count = 0
var score = 0
// start at random position
leftGameArrowPos = -100 //(have a random number to begin with)
rightGameArrowPos = -180
upGameArrowPos = -150
downGameArrowPos = -200

leftGameArrow.style.marginTop = leftGameArrowPos + "px"
rightGameArrow.style.marginTop = rightGameArrowPos + "px"
upGameArrow.style.marginTop = upGameArrowPos + "px"
downGameArrow.style.marginTop = downGameArrowPos + "px"
var arrowArray = [leftGameArrow, rightGameArrow, upGameArrow, downGameArrow];
var pushedArrows = []
var arrowObj ={}
// let startNewGame = document.getElementById("newGameButton")

// var currentPositionX = 0;
// var currentPositionY = 0;

// function moveLeft(){
//   currentPositionX = document.getElementById("box").getBoundingClientRect().left - moveAmount;
//   document.getElementById("box").style.transform = `translate(${currentPositionX}%, ${currentPositionY}%)`;
// }
// var someEventHander=function(){
// 	console.log(event,arrowName);
// }
// //add listener
// document.getElementById("someid").addEventListener('click',someEventHander.bind(event,arrowName));

// // yes.onclick
function newGame() {
    setInterval(function(){ 
        // choose randomArrow
        // pass randomArrow to arrowsFalling function
        // randomArrow = generateRandomArrow() // Here, need logic to generate a random position for randomPosition var
        arrowsFalling()
      }, 50);
  
}

function arrowsFalling() {
  // Object.entries(randomPosition).forEach((arrow, pos) => {
  //   // arrow.style.top = pos
  //   console.log(arrow)
  //   pos += 20
  //   // console.log(pos)
  // })
  if (count < 700) {
    

  leftGameArrowPos += 20
  rightGameArrowPos += 20
  upGameArrowPos += 20
  downGameArrowPos += 20
  leftGameArrow.style.marginTop = leftGameArrowPos + "px"
  rightGameArrow.style.marginTop = rightGameArrowPos + "px"
  upGameArrow.style.marginTop = upGameArrowPos + "px"
  downGameArrow.style.marginTop = downGameArrowPos + "px"
  // console.log("leftArrow", leftGameArrowPos )
  // console.log(leftStaticArrow.style.marginTop)
  // at 610 px left arrow is winning
} else if(count > 700) {
  arrowName.style.visibility = "hidden"
}
}
// function arrowsFalling(arrowName) {
//   // arrowObj.arrowName += 20
//     pushedArrows.push(arrowName)
//     // console.log(pushedArrows)
//     if (count < 749){
//     count += 20
//     // check if it is the first arrow, then we can retain whatever we have got (arrow name passed)
//     // var that keeps track of arrow count
//     // Array to push the arrow names.
//     // first one is selected, start moving the 
//     // array =[]
//     // upon each arrowsFalling
//     // push the arrow name into the array
//     // drop the arrows from the array
//     // ensure the array has unique values, left right top bottom
//     // ["leftArrow"]
//     // ["leftArrow", "rightArrow"]
//     // if left is in the array, dont push it again
//     pushedArrows.forEach(el => {el.style.marginTop = count + 'px';})
//     // pushedArrows.forEach(el => {el.style.top = yAxisFallingLeft + "px"}) //Jordons Code
//     // arrowName.style.marginTop = count + 'px';
//   } else if (count > 750) {    
//     arrowName.style.visibility = "hidden"

  
//   }
//   // keyInput(arrowName)
// }



// function checkKeypress() {
//   check current position of arrowsFalling
//   if arrowsFalling && keyInput === true &&  margin (500-600);
//     score++
// } else {
//   "miss!"
// }

// function logKey(e,arrowName) {
//   console.log(arrowName)// if event.code matches(===) the arrow name, success, else, misscon
//   console.log(e)


// function keyInput(arrowName) {
// document.addEventListener('keydown', logKey.bind("arrowName"));


// Jordons Code
// yAxisStaticLeft = document.getElementById("staticArrowLeft").getBoundingClientRect().y
// console.log(yAxisStaticLeft)
// yAxisStaticUp = document.getElementById("staticArrowUp").getBoundingClientRect().y
// console.log(yAxisStaticUp)
// yAxisStaticDown = document.getElementById("staticArrowDown").getBoundingClientRect().y
// console.log(xAxisStaticDown)
// xAxisStaticRight = document.getElementById("staticArrowRight").getBoundingClientRect().y
// console.log(xAxisStaticRight)
// yAxisFallingLeft = document.getElementById("fallingLeft").getBoundingClientRect().x
// console.log(yAxisFallingLeft)
// all y axis 751


// if moving arrow === still arrow, delete
// +=1 to score
// else -= 1 life

// window.addEventListener('keydown', function(e){
//   // console.log(randomArrow.id) 
//   // console.log(e) 
//   switch(e.key) {

//     case "ArrowLeft":
//       console.log(yAxisFallingLeft)
//     break;
    
//     case "ArrowRight":

//     break;
    
//     case "ArrowUp":

//     break;
    
//     case "ArrowDown":
//     break;
    
//   }
//   console.log(e.key)
//---------------------------------------------------- JC

  // compare the margin and assign yes no values
//   // if arrow
//   if (randomArrow.id >=560 && <= 620) {
// // console.log()
//   } else {
    // display MISS!
  // }
  // successful push 560-620 yes!
// 540-640  First touch / last touch
  //compare the event key pressed with the arrow id =1
  // loop ends after 20 times
// })

function keyInput(arrowName) {
  document.addEventListener('keydown', function(arrowName, e){
  // console.log(arrowName.id) 
  // console.log(e) 
  //compare the event key pressed with the arrow id =1
  // loop ends after 20 times
  }.bind(this, arrowName));
 }
  
// NandsarrowNameconsole.log(arrowName) //check if we get the arrow Name here?  

  //if arrow reaches certain position, stop moving it (if statement)
//  if arrowName.style.marginTop = 540px{
//    break
//  }

function generateRandomArrow() {
   randomArrow = Math.floor(Math.random() * arrowArray.length);
     return arrowArray[randomArrow]

}

// setInterval -> every second
// choose a random Array
//drop arrow down certain pixel


// let currentPositionY = document.getElementById("fallingLeft").getBoundingClientRect().top
// let currentPositionY++
// // console.log(current vertical position is: currentPositionY);
// console.log(currentPositionY)


// console.log(leftGameArrow)
// leftGameArrow.style.left = '100px'
// let arrowUp = document.getElementById("up");


//1. the static buttons in the game div (bottom) 
// - position bottom and center

//2. Start button
// - create start btn
// - let btn = document.querySelector("HTMLBUTTONNAME");
// - define button on click > target arrows and assign to variable

//3. Game trigger > Arrow
// -start button to trigger game
// - button on click > target random arrow element (right/left one at a time) move arrow position down x pixels
// - define base line div or height from the top (variable let baseline = )
// - check for keyboard events and compare event value to the arrow (keyboard events - google)
// - if match = success or else error
// - ARRAY > randomly select > output arrow
// - set interval for arrows falling
// - stop game after 1:00 minute?

// position the arrrow






