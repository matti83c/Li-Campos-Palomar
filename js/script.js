var alval = 0;
var chooser = document.getElementById("chooser");
var title = document.getElementById("title");
var artist = document.getElementById("artist");
var slength = document.getElementById("length");
var tlength = document.getElementById("tlength");
var release = document.getElementById("release");
var genre = document.getElementById("genre");

//look there's definitely a better way to do this but the only javascript program ive made before this was hello world
function onClick1() {
    alval += 1;
    console.log("alval: " + alval);
    showNextQuestion(alval);
}

function onClick100() {
    alval += 100;
    console.log("alval: " + alval);
    showNextQuestion(alval);
}


function showNextQuestion(qval){
    if(qval == 001)(document.getElementById("question").innerHTML = "I'm a new question!");
    else if(qval == 002)(document.getElementById("question").innerHTML = "I'm a newer question!");
    else if(qval == 003)(document.getElementById("question").innerHTML = "I'm a newest question!");
    else if(qval == 143)(document.getElementById("question").innerHTML = "What's up!");

    output(qval); 
}

function output(oval){

    if(oval == 10){
        chooser.remove();
        title.innerHTML = "Hiiiiii";
        artist.innerHTML = "Hiiiiii";
        slength.innerHTML = "Hiiiiii";
        tlength.innerHTML = "Hiiiiii";
        release.innerHTML = "Hiiiiii";
        genre.innerHTML = "Hiiiiii";
    }

}
