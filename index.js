//detecting button press
var numberofdrums = document.querySelectorAll(".drum").length;
for (var i=0; i<numberofdrums; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
     makesound(buttonInnerHTML);


  });
}

//detecting keyboard press

 document.addEventListener("keypress", function(event) {
    makesound(event.key);

 });

 function makesound(key){

   switch (key)  {
     case "a":
     var tom1 = new Audio("tom-1.mp3");
     tom1.play();
     break;


     case "s":
     var tom3 = new Audio('tom-3.mp3');
     tom3.play();
     break;


     case "d":
     var tom4 = new Audio('tom-4.mp3');
     tom4.play();
     break;


     case "f":
     var snare = new Audio('snare.mp3');
     snare.play();
     break;

     case "j":
     var crash = new Audio('crash.mp3');
     crash.play();
     break;

     case "k":
     var kick = new Audio('kick-bass.mp3');
     kick.play();
     break;

     case "l":
     var tom2 = new Audio('tom-2.mp3');
     tom2.play();
     break;

     default: console.log(buttonInnerHtmL);
   }

 }
