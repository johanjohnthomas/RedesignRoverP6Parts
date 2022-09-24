function toggle_visibility_auto(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
        x.style.display = "block";
        setTimeout(function(){
            x.style.display = "none";
        }, 3000);
    }
    else {

    }
}
