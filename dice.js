let randomNumber1=1+Math.floor( Math.random()*6);
let randomdiceimage1="dice"+ randomNumber1+".png";
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage1);

let randomNumber2=1+Math.floor(Math.random()*6);
let randomdiceimage2="dice"+randomNumber2+".png";
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}




