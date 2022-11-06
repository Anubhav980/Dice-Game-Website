
var die = Math.floor(Math.random()*6)+1;

var ab=  "dice" + die + ".png";

document.querySelectorAll("img")[0].setAttribute("src",ab);

var de = Math.floor(Math.random()*6)+1;

var cd=  "dice" + de + ".png";

document.querySelectorAll("img")[1].setAttribute("src",cd);

if(die>de)
{
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (de > die)
{
  document.querySelector("h1").innerHTML = "Player 2  Wins 🚩";
}
else if (de === die)
{
  document.querySelector("h1").innerHTML = "Draw!";
}
