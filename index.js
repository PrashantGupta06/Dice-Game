var random1=Math.floor(Math.random()*6)+1;

var randomImage1="Dice" + random1 + ".png";

var randomImageSource1="images/" + randomImage1;
//Image1 will be updated randomly 
document.querySelector(".img1").setAttribute("src",randomImageSource1);

var random2=Math.floor(Math.random()*6)+1;

var randomImage2="Dice" + random2 + ".png";

var randomImageSource2="images/" + randomImage2;
//Iamge2 will be updated randomly
document.querySelector(".img2").setAttribute("src",randomImageSource2);

if(random1>random2)
{
    document.querySelector("h1").innerHTML="Player1 Won!";
}
else if(random1<random2)
{
    document.querySelector("h1").innerHTML="Player2 Won!";
}
else
{
    document.querySelector("h1").innerHTML="DWAW";
}





// if(random===1)
// {
//     <a href="B:\Coding\WEBD\Angela\Dicee Challenge - Starting Files\images\Dice1.png">Dice1</a>
// }
// else if(random===2)
// {
//     <a href="B:\Coding\WEBD\Angela\Dicee Challenge - Starting Files\images\Dice2.png">Dice2</a>
// }
// else if(random===3)
// {
//     <a href="B:\Coding\WEBD\Angela\Dicee Challenge - Starting Files\images\Dice3.png">Dice3</a>
// }
// else if(random===4)
// {
//     <a href="B:\Coding\WEBD\Angela\Dicee Challenge - Starting Files\images\Dice4.png">Dice4</a>
// }
// else if(random===5)
// {
//     <a href="B:\Coding\WEBD\Angela\Dicee Challenge - Starting Files\images\Dice5.png">Dice5</a>
// }
// else
// {
//     <a href="B:\Coding\WEBD\Angela\Dicee Challenge - Starting Files\images\Dice6.png">Dice6</a>
// }