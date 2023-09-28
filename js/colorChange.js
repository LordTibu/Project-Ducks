var titleTex = "Welcome To Project Ducks!";
var velocity = 100; 
var index = 0;

function writeText() {
    var e = document.getElementById("firstTitle");
    
    if (index < titleTex.length) {
        e.innerHTML += titleTex.charAt(index);
        index++;
        setTimeout(writeText, velocity);
    }
}

window.onload = writeText;
