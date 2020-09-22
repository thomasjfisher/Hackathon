// game width is x 255px; y 960px;

var leftGameArrow = document.getElementById("fallingLeft")
var rightGameArrow = document.getElementById("fallingRight")
var upGameArrow = document.getElementById("fallingUp")
var downGameArrow = document.getElementById("fallingDown")
let count = 0
var score = 0
let startNewGame = document.getElementById("newGameButton")

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
// function newGame() {
//   arrowsFalling();
// }

// startNewGame.addEventListener('click', function (){
//   arrowsFalling();
// });


// document.getElementById('newGame').addEventListener('click', addStash);


function arrowsFalling(arrowName) {
  if (count < 700){
    count += 20
    arrowName.style.marginTop = count + 'px';
  // } else {
  //   keyInput(arrowName)
  //   keyInputNands(arrowName)
  // }
  
}
// function logKey(e,arrowName) {
//   console.log(arrowName)// if event.code matches(===) the arrow name, success, else, misscon
//   console.log(e)
}

// function keyInput(arrowName) {
// document.addEventListener('keydown', logKey.bind("arrowName"));



// Nands test code:

// function keyInput(arrowName) {
//   document.addEventListener('keydown', (e, arrowName) => {
//   console.log(arrowName) //check if we get the arrow Name here?
//   });
//  }
  
// NandsarrowNameconsole.log(arrowName) //check if we get the arrow Name here?  

  //if arrow reaches certain position, stop moving it (if statement)
//  if arrowName.style.marginTop = 540px{
//    break
//  }

function generateRandomArrow() {
  return leftGameArrow
  //Array of arrows
}

setInterval(function(){ 
  // choose randomArrow
  // pass randomArrow to arrowsFalling function
  let randomArrow = generateRandomArrow()
  arrowsFalling(randomArrow)
}, 50);


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






