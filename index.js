var button_s = document.getElementsByTagName("button");
for(i = 0 ; i < button_s.length;i++){
  button_s[i].addEventListener("click", function(){
    var input_tap = this.textContent;
    playSound(input_tap);
    pressAnimation(input_tap);
  });
}
document.addEventListener("keydown", function(event){

      playSound(event.key);
      pressAnimation(event.key);
});



function playSound(b1){
 switch (b1) {
   case "w":
   var t1 = new Audio("sounds/tom-4.mp3");
   t1.play();
     break;
  case "a":
   var t2 = new Audio("sounds/tom-1.mp3");
   t2.play();
       break;
   case "s":
   var t3 = new Audio("sounds/tom-3.mp3");
   t3.play();
       break;
   case "d":
   var t4 = new Audio("sounds/tom-2.mp3");
   t4.play();
       break;
   case "j":
   var t8 = new Audio("sounds/snare.mp3");
   t8.play();
       break;
   case "k":
   var t9 = new Audio("sounds/kick-bass.mp3");
   t9.play();
       break;
   case "l":
   var t10 = new Audio("sounds/crash.mp3");
   t10.play();
       break;
   default: console.log(b1);

 }


}


function pressAnimation(b2){
  var keyPressed = document.querySelector("." + b2);
  keyPressed.classList.add("pressed");
  setTimeout(function () {
    keyPressed.classList.remove("pressed")
  }, 100);

}
