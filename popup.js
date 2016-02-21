
debugger;
document.addEventListener('DOMContentLoaded', function() {

    var btn = document.getElementById('btn');
    var state = "inactive";

    btn.addEventListener('click', function() {
        if(state === "inactive") {
            btn.innerHTML = "Fuck this shit.";
            state = "active";
        }
        else {
            btn.innerHTML = "Fuck that shit.";
            state = "inactive";
        }
    });
});

