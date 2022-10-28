var not = 0;
var is = 0;
var chooser = document.getElementById("chooser");
var desc = document.getElementById("desc");
var alist = document.getElementById("alist");
var genre = document.getElementById("genre");
var question = document.getElementById("question");
var out = document.getElementById("out");
var img = document.getElementById("pic");
var cap = document.getElementById("capt");

$(window).load(function() {
    $("body").removeClass("preload");
});

//////////////////////////////////////
//------------BUTTONS---------------//
//////////////////////////////////////

//look there's definitely a better way to do this but the only javascript program ive made before this was hello world
function onClick1() {
    if(not != 0)(is = 1);
    if(not == 0)(not = 1);
    showNextQuestion();
    console.log("not: " + not + " is: " + is)
}

function onClick100() {
    if(not != 0)(is = 2);
    if(not == 0)(not = 2);
    showNextQuestion();
    console.log("not: " + not + " is: " + is)
}


function Sel3() {
    if(not != 0)(is = 3);
    if(not == 0)(not = 3);
    showNextQuestion();
    console.log("not: " + not + " is: " + is)
}

function Sel4() {
    if(not != 0)(is = 4);
    if(not == 0)(not = 4);
    showNextQuestion();
    console.log("not: " + not + " is: " + is)
}


function Sel5() {
    if(not != 0)(is = 5);
    if(not == 0)(not = 5);
    showNextQuestion();
    console.log("not: " + not + " is: " + is)
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

    if(is == 0){
        question.innerHTML = "What do you like in your music?";
        next();
    }

    if(not != 0 && is != 0)(output(is))
}

function output(oval){
    out.style.opacity = 1;
    out.style.pointerEvents = "unset";
    chooser.remove();
    cap.remove();

    if(not != 1 && is == 1){ 
            chooser.remove();
            img.src="../images/POP.jpg";
            genre.innerHTML = "Pop";
            desc.innerHTML = "The most popular music genre. Characterized by catchy and popping choruses and upbeat instrumentals.";
            alist.innerHTML = "Consists of Ariana Grande, Michael Jackson, Taylor Swift, Charli XCX, and many more.";
    }
    if((not != 2 && is == 3) || (not == 1 && is == 1) || (not == 5 && is == 4)){  
            chooser.remove();
            img.src="../images/HIP HOP.jpg";
            genre.innerHTML = "Hip hop";
            desc.innerHTML = "Built around rhyme-dense and often melody-sparse lyricism and fast-paced catchy instrumentals. Not the same as rap, but similar- rap is a subgenre of Hip Hop.";
            alist.innerHTML = "Consists of Kendrick Lamar, Kanye West, Playboi Carti, Tyler, The Creator and many more.";
    }
    if((not != 3 && is == 5) || (not == 2 && is == 3) || (not == 4 && is == 2)){ 
        chooser.remove();
        img.src="../images/INDIE.jpg";
        genre.innerHTML = "Indie";
        desc.innerHTML = "Independent. Characterized by artists who stray away from major producers or popular sounds.";
        alist.innerHTML = "Consists of Clairo, Mac Demarco, TV Girl, Faye Webster, and many more.";
    }
    if((not != 4 && is == 2) || (not == 3 && is == 5)){  
        chooser.remove();
        img.src="../images/RNB.jpg";
        genre.innerHTML = "RnB";
        desc.innerHTML = "Rhythm and Blues. Characterized by slow, moody instrumentals and somber lyricism, it sounds exactly how it's named.";
        alist.innerHTML = "Consists of Frank Ocean, Steve Lacy, Beyonce, SZA, and many more.";
    }
    if(not != 5 && is == 4){  
        chooser.remove();
        img.src="../images/ROCK.jpg";
        genre.innerHTML = "Rock";
        desc.innerHTML = "Rock and Roll. Built around the electric guitar, electric bass, and drums. Extremely diverse.";
        alist.innerHTML = "Consists of The Strokes, Nirvana, Car Seat Headrest, Weezer, and many more.";
    }
}

