var boolean = false;
window.addEventListener('scroll', () =>{
    const scrolled = window.scrollY;


    if(scrolled>1150){
        if(!boolean){
        document.getElementById("history-parallax").innerHTML= '<div id = "history-text"><b>A WINDOW INTO THE PAST.<br><br><br><br><br><div id = "history-subtext">Learn about the history of the RoverP6. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span>></span></div></b></div>';
        boolean = true;
    }
    }

    if(scrolled<1150){

        document.getElementById("history-text").style.opacity="0";
        document.getElementById("history-text").style.transition="0.3s ease";





    boolean = false;
}

});
