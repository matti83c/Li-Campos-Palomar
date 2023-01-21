var like = 0;
var era = 0;
var out = document.getElementById("output");
var cap = document.getElementById("title");
var chooser = document.getElementById("chooser");
var desc = document.getElementById("desc");
var alist = document.getElementById("alist");
var genre = document.getElementById("genre");
var question = document.getElementById("question");
var img = document.getElementById("pic");
var artist = document.getElementById("artist");
var years = document.getElementById("years");

$(window).load(function() {
    $("body").removeClass("preload");
});

//////////////////////////////////////
//------------BUTTONS---------------//
//////////////////////////////////////

//look there's definitely a better way to do this but the only javascript program ive made before this was hello world
function onClick() {
    if(like != 0)(era = 1);
    if(like == 0)(like = 1);
    showNextQuestion();
    console.log("like: " + like + " era: " + era)
}

function onClick100() {
    if(like != 0)(era = 2);
    if(like == 0)(like = 2);
    showNextQuestion();
    console.log("like: " + like + " era: " + era)
}


function Sel3() {
    if(like != 0)(era = 3);
    if(like == 0)(like = 3);
    showNextQuestion();
    console.log("like: " + like + " era: " + era)
}

function Sel4() {
    if(like != 0)(era = 4);
    if(like == 0)(like = 4);
    showNextQuestion();
    console.log("like: " + like + " era: " + era)
}


function Sel5() {
    if(like != 0)(era = 5);
    if(like == 0)(like = 5);
    showNextQuestion();
    console.log("like: " + like + " era: " + era)
}

function next() {
    document.getElementById("1").innerHTML = "80s";
    document.getElementById("2").innerHTML = "90s";
    document.getElementById("3").innerHTML = "2000s - Present";
    document.getElementById("4").remove();
    document.getElementById("5").remove();
}

////////////////////////////////
// --- QUESTION DATABASE --- ///
///////////////////////////////

function showNextQuestion(){

    if(era == 0){
        question.innerHTML = "Which era of music do you like best?";
        next();
    }

    if(era != 0 && like != 0)(output(era))
}

function output(oval){
    out.style.pointerEvents = "unset";
    out.style.opacity = 1;
    chooser.remove();
    cap.innerHTML = "Your result: "

    if(era == 1){
        artist.innerHTML = "Michael Jackson";
        img.src='../images/Michael Jackson.jpg';
        genre.innerHTML = "Pop";
        years.innerHTML = "Active 1964 - 2009"
    }

    if(era == 2 && like == 2){
        artist.innerHTML = "Wu-Tang Clan"
        img.src='../images/Wu-tang Clan.jpg';
        genre.innerHTML = "Hip-hop";
        years.innerHTML = "Active 1992 - Present"
    } else if(era == 2 && like != 2){
            artist.innerHTML = "Weezer";
            img.src='../images/Weezer.jpg';
            genre.innerHTML = "Alt Rock";
            years.innerHTML = "Active 1992 - Present"
    }

    if(era == 3 && like == 1){
        artist.innerHTML = "Charli XCX"
        img.src='../images/Charli XCX.jpg';
        genre.innerHTML = "Hyperpop";
        years.innerHTML = "Active 2008 - Present";
    }

    if(era == 3 && like == 2){
        artist.innerHTML = "Tyler, The Creator"
        img.src='../images/Tyler, the Creator.jpg';
        genre.innerHTML = "Hip-hop/Rap";
        years.innerHTML = "Active 2007 - Present";
    }

    if(era == 3 && like == 3){
        artist.innerHTML = "Faye Webster"
        img.src='../images/Faye Webster.jpg';
        genre.innerHTML = "Indie";
        years.innerHTML = "Active 2013 - Present";
    }

    if(era == 3 && like == 4){
        artist.innerHTML = "Steve Lacy"
        img.src='../images/Steve Lacy.jpg';
        genre.innerHTML = "RnB";
        years.innerHTML = "Active 2013 - Present";
    }

    if(era == 3 && like == 5){
        artist.innerHTML = "Car Seat Headrest"
        img.src='../images/Car Seat Headrest.jpg';
        genre.innerHTML = "Indie Rock";
        years.innerHTML = "Active 2010 - Present";
    }
}

