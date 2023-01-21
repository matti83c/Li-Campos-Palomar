var like = 0;
var mood = 0;
var cap = document.getElementById("title");
var chooser = document.getElementById("chooser");
var desc = document.getElementById("desc");
var alist = document.getElementById("alist");
var genre = document.getElementById("genre");
var question = document.getElementById("question");
var out = document.getElementById("output");
var img = document.getElementById("pic");
var artist = document.getElementById("artist");
var lengthh = document.getElementById("length");
var song = document.getElementById("song");
var album = document.getElementById("album");
var release = document.getElementById("release");

$(window).load(function() {
    $("body").removeClass("preload");
});

//////////////////////////////////////
//------------BUTTONS---------------//
//////////////////////////////////////

//look there's definitely a better way to do this but the only javascript program ive made before this was hello world
function onClick1() {
    if(like != 0)(mood = 1);
    if(like == 0)(like = 1);
    showNextQuestion();
    console.log("like: " + like + " mood: " + mood)
}

function onClick100() {
    if(like != 0)(mood = 2);
    if(like == 0)(like = 2);
    showNextQuestion();
    console.log("like: " + like + " mood: " + mood)
}


function Sel3() {
    if(like != 0)(mood = 3);
    if(like == 0)(like = 3);
    showNextQuestion();
    console.log("like: " + like + " mood: " + mood)
}

function Sel4() {
    if(like != 0)(mood = 4);
    if(like == 0)(like = 4);
    showNextQuestion();
    console.log("like: " + like + " mood: " + mood)
}


function Sel5() {
    if(like != 0)(mood = 5);
    if(like == 0)(like = 5);
    showNextQuestion();
    console.log("like: " + like + " mood: " + mood)
}

function next() {
    document.getElementById("1").innerHTML = "Energetic / Happy";
    document.getElementById("2").innerHTML = "Moody / Nostalgic";
    document.getElementById("3").innerHTML = "Funky";
    document.getElementById("4").innerHTML = "Loud";
    document.getElementById("5").innerHTML = "Lighthearted / Less Abrasive";
}

////////////////////////////////
// --- QUESTION DATABASE --- ///
///////////////////////////////

function showNextQuestion(){

    if(mood == 0){
        question.innerHTML = "What mood do you like in your music?";
        next();
    }

    if(like != 0 && mood != 0)(output(mood))
}

function output(oval){
    out.style.opacity = 1;
    out.style.pointerEvents = "unset";
    chooser.remove();
    cap.innerHTML = "Your result: "

    if((like == 1 && mood == 1) || (like == 1 && mood == 5) || (like == 1 && mood == 3) || (like == 2 && mood == 1) || (like == 2 && mood == 3) || (like == 2 && mood == 5)){ 
        song.innerHTML = "After The Storm";
        artist.innerHTML = "Kali Uchis";
        img.src = "../images/Isolation - Kali Uchis.jpg";
        lengthh.innerHTML = "3:27";
        album.innerHTML = "from the album Isolation";
        release.innerHTML = "2018";
        genre.innerHTML = "Pop";
    }
    if((like == 1 && mood == 2) || (like == 1 && mood == 4)){
        song.innerHTML = "THAT'S WHAT I WANT";
        artist.innerHTML = "Lil Nas X";
        img.src = "../images/Lil Nas X.jpg";
        lengthh.innerHTML == "2:23";
        album.innerHTML = "from the album MONTERO";
        release.innerHTML = "2021";
        genre.innerHTML = "Pop";
    }

    if((like == 2 && mood == 2) || (like == 2 && mood == 4)){
        song.innerHTML = "Location";
        artist.innerHTML = "Playboi Carti";
        img.src= "../images/Playboi Carti - Playboi Carti.jpg";
        lengthh.innerHTML == "2:48";
        album.innerHTMl = "from the album Playboi Carti (Self Titled)"
        release.innerHTML = "2017";
        genre.innerHTML = "Hip-Hop/Trap";
    }

    if((like == 3 && mood != 1) || (like == 4 && mood != 1)){
        song.innerHTML = "Juno";
        artist.innerHTML = "Choker";
        img.src= "../images/Choker.jpg";
        lengthh.innerHTML == "3:51";
        album.innerHTMl = "from the album Honeybloom";
        release.innerHTML = "2018";
        genre.innerHTML = "RnB";
    }

    if((like == 3 && mood ==1) || (like == 4 && mood == 1)){
        song.innerHTML = "Amoeba";
        artist.innerHTML = "Clairo";
        img.src= "../images/Sling - Clairo.jpg";
        lengthh.innerHTML == "3:48";
        album.innerHTMl = "from the album Sling";
        release.innerHTML = "2021";
        genre.innerHTML = "Indie";
    }

    if((like == 5 && mood != 2) || (like == 5 && mood != 5)){
        song.innerHTML = "Bodys";
        artist.innerHTML = "Car Seat Headrest";
        img.src= "../images/Twin_fantasy.jpg";
        lengthh.innerHTML == "6:46";
        album.innerHTMl = "from the album Twin Fantasy (Face-to-face)";
        release.innerHTML = "2018";
        genre.innerHTML = "Alt Rock";
    }

    if((like == 5 && mood == 2) || (like == 5 && mood == 5)){
        song.innerHTML = "Sober to Death";
        artist.innerHTML = "Car Seat Headrest";
        img.src= "../images/Twin_fantasy.jpg";
        lengthh.innerHTML == "5:04";
        album.innerHTMl = "from the album Twin Fantasy (Face-to-face)";
        release.innerHTML = "2018";
        genre.innerHTML = "Alt Rock";
    }
}

