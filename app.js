let images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

document.getElementById("btn").addEventListener("click", function showImage() {
  let playerOne = Math.floor(Math.random() * images.length);
  document.getElementById("leftImage").src = images[playerOne];

  let playerTwo = Math.floor(Math.random() * images.length);
  document.getElementById("rightImage").src = images[playerTwo];

  if (playerOne > playerTwo) {
    document.querySelector(".title").innerHTML = "🚩Irochka Wins!";
  } else if (playerTwo > playerOne) {
    document.querySelector(".title").innerHTML = "Philochka Wins!🚩";
  } else {
    document.querySelector(".title").innerHTML = "It's a draw!";
  }
});

showImage();
