var sall =document.querySelectorAll(".drum");
function anim(key) {
   let btn=document.querySelector("."+key);
   btn.classList.add("pressed");
   setTimeout(function(){
      btn.classList.remove("pressed");
   },100);
}
for(let i=0;i<sall.length;i++){
    sall[i].addEventListener("click",function(){
         c=sall[i].innerHTML;
         //alert(c);
         call(c);
         anim(c);
    });
    sall[i].addEventListener("keydown",function(event){
      c=sall[i].innerHTML;
      call(event.key);
      anim(event.key);
     
 });
}
call=function(c) {
   if(c=="w"){
      var ad=new Audio("sounds/tom-1.mp3");
      ad.play();
   }
   else if(c== "a"){
      var ad=new Audio("sounds/tom-2.mp3");
      ad.play();
   }
   else if(c== "s"){
      var ad=new Audio("sounds/tom-3.mp3");
      ad.play();
   }
   else if(c== "d"){
      var ad=new Audio("sounds/tom-4.mp3");
      ad.play();
   }
   else if(c== "j"){
      var ad=new Audio("sounds/crash.mp3");
      ad.play();
   }
   else if(c== "k"){
      var ad=new Audio("sounds/snare.mp3");
      ad.play();
   }
   else{
      var ad=new Audio("sounds/kick-bass.mp3");
      ad.play(); 
   }

   
};
