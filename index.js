
var n1 = Math.random();
n1 = n1*6;
n1 = Math.floor(n1) + 1;

var diceImage = "dice" + n1 + ".png";
var imageSource = "images/" + diceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imageSource);

var n2 = Math.floor(Math.random()*6) + 1;
// var diceImage2 = "dice" + n2 + ".png";
var imageSource2 = "images/dice" + n2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imageSource2);


if(n1 > n2){
  document.querySelector("h1").innerHTML = "Player1 wins 🚩";
}
else if(n2 > n1){
  document.querySelector("h1").innerHTML = "Player2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}




























// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//
// var randomDiceImage = "dice" + randomNumber1 + ".png";
//
// var randomImageSource = "images/" + randomDiceImage;
//
// var img1 = document.querySelectorAll("img")[0];
//
// img1.setAttribute("src", randomImageSource);
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// var img2 = document.querySelectorAll("img")[1];
//
// img2.setAttribute("src", randomImageSource2);
//
// if(randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
// }
// else if(randomNumber2 > randomNumber1){
//     document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
// }
// else{
//     document.querySelector("h1").innerHTML = "Draw";
// }
