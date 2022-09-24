var currentSlideIndex = -1;

    
var slides = ['<img class = "fadeinanimation" src = "images/slideshow1.jpg" style="width:100%">','<img class = "fadeinanimation"  src = "images/slideshow2.png" style="width:100%">','<img class = "fadeinanimation" src = "images/slideshow3.png" style="width:100%;">'];

var dots = ['<span class = "dot" class = "active" id="dot1" onclick="currentSlide(1)" style = "background-color:#F0A500;"></span> <span class = "dot" id="dot2" onclick="currentSlide(2)"></span><span class = "dot" id="dot3" onclick="currentSlide(3)"></span>'
,'<span class = "dot" id="dot1" onclick="currentSlide(1)"></span> <span class = "dot" class = "active" id="dot2" onclick="currentSlide(2)" style = "background-color:#F0A500;"></span><span class = "dot" id="dot3" onclick="currentSlide(3)"></span>', 
'<span class = "dot" id="dot1" onclick="currentSlide(1)"></span> <span class = "dot" id="dot2" onclick="currentSlide(2)"></span><span class = "dot" class = "active" id="dot3" onclick="currentSlide(3)" style = "background-color:#F0A500;"></span>'];
var userInteracts = true;
autoSlideMovement();


function autoSlideMovement(){
if(userInteracts){
    currentSlideIndex++;
    
    if(currentSlideIndex ==slides.length){
        currentSlideIndex = 0;
    }
   


    document.getElementById("dotid").innerHTML = dots[currentSlideIndex];
    
    document.getElementById("slideshow-image").innerHTML=slides[currentSlideIndex];
    setTimeout(autoSlideMovement, 3000);
}
}




function currentSlide(x){
    if (currentSlideIndex == slides.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {

        currentSlideIndex = slides.length-1;
    }
    
    currentSlideIndex = x-1;
    userInteracts = false;
    document.getElementById("dotid").innerHTML = dots[currentSlideIndex];
    document.getElementById("slideshow-image").innerHTML=slides[currentSlideIndex];

    
       
    

    

}
function plusSlides(n){
    currentSlideIndex = currentSlideIndex + n;
    if(currentSlideIndex == -1){
        currentSlideIndex = slides.length - 1;

    }
    if(currentSlideIndex ==slides.length){
        currentSlideIndex = 0;
    }
   

    userInteracts = false;
    document.getElementById("dotid").innerHTML = dots[currentSlideIndex];
    document.getElementById("slideshow-image").innerHTML=slides[currentSlideIndex];
   
}
