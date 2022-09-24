//function to change the events box on the main page
function change_visible_event(id) {
    if(id == 'upcoming-events'){
        document.getElementById('upcoming-events').style.opacity = '1';
        document.getElementById('past-events').style.opacity = '0';
        document.getElementById('button-css-change').href = "upcoming-events-button.css";
    }

    else if (id == "past-events"){

        document.getElementById('upcoming-events').style.opacity = '0';
        document.getElementById('past-events').style.opacity = '1';
        document.getElementById('button-css-change').href = "past-events-button.css";
    }
}
