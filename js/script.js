var alval = 0;
var sel = 0;
var path = 0;
var chooser = document.getElementById("chooser");
var title = document.getElementById("title");
var artist = document.getElementById("artist");
var slength = document.getElementById("length");
var tlength = document.getElementById("tlength");
var release = document.getElementById("release");
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
    if(sel != 0){
        alval += 1
    };
    if(sel == 0)(loadNewQuestions()); 
    if(alval == 0 && sel == 0){
        sel += 1;
        console.log("Pop");
    }; //for the first question
    detPath(document.getElementById("question").innerHTML);
    showNextQuestion(alval);
    console.log("alval: " + alval + " sel: " + sel + " path: " + path) //troubleshooting
}

function onClick100() {
    if(sel != 0){
        alval += 100;
    };
    if(sel == 0)(loadNewQuestions()); 
    if(alval == 0 && sel == 0){
        sel += 2;
        console.log("Hip Hop");
    }; //for the first question
    detPath(document.getElementById("question").innerHTML);

    showNextQuestion(alval);
    console.log("alval: " + alval + " sel: " + sel + " path: " + path) //troubleshooting
}


function Sel3() {
    if(alval == 0 && sel == 0){
        sel += 3;
        console.log("Indie");
    }
    showNextQuestion(alval);
    loadNewQuestions(); 
    console.log("alval: " + alval + " sel: " + sel + " path: " + path) //troubleshooting
}

function Sel4() {
    if(alval == 0 && sel == 0){
        sel += 4;
        console.log("RnB");
    }
    showNextQuestion(alval);
    loadNewQuestions(); 
    console.log("alval: " + alval + " sel: " + sel + " path: " + path) //troubleshooting
}


function Sel5() {
    if(alval == 0 && sel == 0){
        sel += 5;
        console.log("Rock");
    }
    showNextQuestion(alval);
    loadNewQuestions(); 
    console.log("alval: " + alval + " sel: " + sel + " path: " + path) //troubleshooting
}




function detPath(qcont) {
    if(qcont == "Do you like K-POP?" && alval == 1)(path = 1);
    if(qcont == "Do you like K-POP?" && alval == 100)(path = 2);
}

function loadNewQuestions(){
    document.getElementById("1").innerHTML = "Yes";
    document.getElementById("2").innerHTML = "No";
    document.getElementById("3").remove();
    document.getElementById("4").remove();
    document.getElementById("5").remove();
}

function reset(){
    document.getElementById("1").innerHTML = "Yes";
    document.getElementById("2").innerHTML = "No";
}

////////////////////////////////
// --- QUESTION DATABASE --- ///
///////////////////////////////

//if it's NO, add 100 to qval
//if it's YES, add 1 to qval

function showNextQuestion(qval){

    if(sel == 1){ //they choose pop
        if(path == 0){
            question.innerHTML = "Do you like K-POP?";
            document.getElementById("2").innerHTML = "No, I prefer western pop.";
        }
        if(path == 1){
            if(qval == 001)
            {
                reset();
                question.innerHTML = "Do you like BTS?"
            };
                    if(qval == 2)(output(qval));
            if(qval == 101)
            {
                reset();
                question.innerHTML = "Do you like Blackpink?"
            };
                if(qval == 102)(output(qval));
                if(qval == 201){
                    question.innerHTML = "Do you prefer newer groups or older groups?";
                    document.getElementById("1").innerHTML = "Newer";
                    document.getElementById("2").innerHTML = "Older";
                }
                if(qval == 202)(output(qval));
                if(qval == 301)(output(qval));
        }
        if(path == 2){
            if(qval == 100)
            {
                reset();
                question.innerHTML = "Do you like Billie Eilish's music?"
            };
                    if(qval == 101)(output(qval));
                if(qval == 200)(question.innerHTML = "Do you like Ariana Grande's music?");
                    if(qval == 201)(output(qval));
                if(qval == 300)(question.innerHTML = "Do you like Mariah Carey's music?");
                    if(qval == 301)(output(qval));
                    if(qval == 400)(output(qval));
            }
        
        };

        if(sel == 2){ //they chose hip-hop

            question.innerHTML = "Do you like Tyler, The Creator's music?";
                if(qval == 1)(output(qval));
            if(qval == 100)(question.innerHTML = "Do you like Kanye West's music?");
                if(qval == 101)(output(qval));
            if(qval == 200)(question.innerHTML = "Do you like Eminem's music?");
                if(qval == 201)(output(qval));
                if(qval == 300)(output(qval));
        }
        
        if(sel == 3){//they chose indie
        
            question.innerHTML = "Do you like Clairo's music?"
                if(qval == 001)(output(qval));
            if(qval == 100)(question.innerHTML = "Do you like Mac Demarco's music?");
                if(qval == 101)(output(qval));
            if(qval == 200)(question.innerHTML = "Do you like TV Girl's music?");
                if(qval == 201)(output(qval));
                if(qval == 300)(output(qval));
            
        }

        if(sel == 4){//they chose rnb
        
            question.innerHTML = "Do you like Steve Lacy's music?"
                if(qval == 001)(output(qval));
            if(qval == 100)(question.innerHTML = "Do you like Daniel Caesar's music?");
                if(qval == 101)(output(qval));
            if(qval == 200)(question.innerHTML = "Do you like Frank Ocean's music?");
                if(qval == 201)(output(qval));
                if(qval == 300)(output(qval));
            
        }

        if(sel == 5){//they chose rock
        
            question.innerHTML = "Do you like Paramore's music?"
                if(qval == 001)(output(qval));
            if(qval == 100)(question.innerHTML = "Do you like Deftones's music?");
                if(qval == 101)(output(qval));
            if(qval == 200)(question.innerHTML = "Do you like Nirvana's music?");
                if(qval == 201)(output(qval));
                if(qval == 300)(output(qval));
            
        }



}


function output(oval){
    out.style.opacity = 1;
    out.style.pointerEvents = "unset";
    chooser.remove();
    cap.innerHTML = "Your result: "
    if(sel == 1){
        if(oval == 2 || oval == 202){ //like bts
            chooser.remove();
            img.src="../images/Sticker - NCT 127.jpg"
            title.innerHTML = "Sticker";
            artist.innerHTML = "NCT 127";
            slength.innerHTML = "11 Songs";
            tlength.innerHTML = "38:46";
            release.innerHTML = "Sept 17, 2021";
            genre.innerHTML = "Experimental K-Pop";
        }

        if(oval == 102 || oval == 301){ //like blackpink
            chooser.remove();
            img.src="../images/Max & Match - LOONA.jpg"
            title.innerHTML = "Max & Match";
            artist.innerHTML = "LOONA / ODD EYE CIRCLE";
            slength.innerHTML = "8 Songs";
            tlength.innerHTML = "25:18";
            release.innerHTML = "Oct 31, 2017";
            genre.innerHTML = "K-Pop";
        }

        if(oval == 101){ //like billie
            chooser.remove();
            img.src="../images/Positions - Ariana Grande.jpg";
            title.innerHTML = "Positions";
            artist.innerHTML = "Ariana Grande";
            slength.innerHTML = "14 Songs";
            tlength.innerHTML = "41:14";
            release.innerHTML = "Oct 30, 2020";
            genre.innerHTML = "Pop";
        }

        if(oval == 201){//ariana
            chooser.remove();
            img.src="../images/Positions - Ariana Grande.jpg";
            title.innerHTML = "CRASH";
            artist.innerHTML = "CHARLI XCX";
            slength.innerHTML = "12 Songs";
            tlength.innerHTML = "33:51";
            release.innerHTML = "Mar 18, 2022";
            genre.innerHTML = "Alt Pop";
        }

        if(oval == 301){//mariah
            chooser.remove();
            img.src="../images/Off The Wall - Michael Jackson.jpg";
            title.innerHTML = "Off The Wall";
            artist.innerHTML = "Michael Jackson";
            slength.innerHTML = "10 Songs";
            tlength.innerHTML = "42:24";
            release.innerHTML = "Aug 10, 1979";
            genre.innerHTML = "Pop";
        }

        if(oval == 400){ //none of the above
            chooser.remove();
            img.src="../images/How To Be A Human Being - Glass Animals.jpg";
            title.innerHTML = "How To Be A Human Being";
            artist.innerHTML = "Glass Animals";
            slength.innerHTML = "11 Songs";
            tlength.innerHTML = "43:13";
            release.innerHTML = "Aug 26, 2016";
            genre.innerHTML = "Alt Pop";
        }
    }

    if(sel == 2){
        if(oval == 1){//tyler
            chooser.remove();
            img.src="../images/Die Lit - Playboi Carti.jpg";
            title.innerHTML = "Die Lit";
            artist.innerHTML = "Playboi Carti";
            slength.innerHTML = "19 Songs";
            tlength.innerHTML = "57:47";
            release.innerHTML = "May 11, 2018";
            genre.innerHTML = "Trap";
        }

        if(oval == 101){//ye
            chooser.remove();
            img.src="../images/MM...FOOD - MF DOOM.jpg";
            title.innerHTML = "MM..FOOD";
            artist.innerHTML = "MF DOOM";
            slength.innerHTML = "15 Songs";
            tlength.innerHTML = "48:54";
            release.innerHTML = "Nov 16, 2004";
            genre.innerHTML = "Abstract Hip Hop";
        }

        if(oval == 201){//em
                chooser.remove();
                img.src="../images/Madvillainy - Madvillain, MF DOOM.jpg";
                title.innerHTML = "Madvillainy";
                artist.innerHTML = "Madvillain, MF DOOM, Madlib";
                slength.innerHTML = "22 Songs";
                tlength.innerHTML = "46:22";
                release.innerHTML = "Mar 24, 2004";
                genre.innerHTML = "Abstract Hip Hop";
        }

        if(oval == 300){// no1
            chooser.remove();
            img.src="../images/Icedancer - Bladee.jpg";
            title.innerHTML = "Icedancer";
            artist.innerHTML = "Bladee";
            slength.innerHTML = "19 Songs";
            tlength.innerHTML = "43:01";
            release.innerHTML = "Dec 29, 2018";
            genre.innerHTML = "Experimental Hip Hop";
        }
    }
    
    if(sel == 3){
        if(oval == 1){//clairo
            chooser.remove();
            img.src="../images/Salad Days - Mac Demarco.jpg";
            title.innerHTML = "Salad Days";
            artist.innerHTML = "Mac Demarco";
            slength.innerHTML = "11 Songs";
            tlength.innerHTML = "34:46";
            release.innerHTML = "April 1, 2014";
            genre.innerHTML = "Indie";
        }

        if(oval == 101){//mac demarco
            chooser.remove();
            img.src="../images/Typical of Me - Laufey.jpg";
            title.innerHTML = "Typical of Me";
            artist.innerHTML = "Laufey";
            slength.innerHTML = "7 Songs";
            tlength.innerHTML = "21:00";
            release.innerHTML = "April 30, 2021";
            genre.innerHTML = "Abstract Hip Hop";
        }

        if(oval == 201){//tv girl
                chooser.remove();
                img.src="../images/In The Aeroplane Over The Sea - Neutral Milk Hotel.jpg";
                title.innerHTML = "In The Aeroplane Over The Sea";
                artist.innerHTML = "Neutral Milk Hotel";
                slength.innerHTML = "11 Songs";
                tlength.innerHTML = "39:54";
                release.innerHTML = "Feb 20, 1998";
                genre.innerHTML = "Indie";
        }

        if(oval == 300){// no1
            chooser.remove();
            img.src="../images/Unexpectedly - Megumi Acorda.jpg";
            title.innerHTML = "Unexpectedly";
            artist.innerHTML = "Megumi Acorda";
            slength.innerHTML = "4 Songs";
            tlength.innerHTML = "17:30";
            release.innerHTML = "Mar 17, 2018";
            genre.innerHTML = "Indie";
        }
    }

    if(sel == 4){
        if(oval == 1){//lacy
            chooser.remove();
            img.src="../images/Freudian - Daniel Caesar.jpg";
            title.innerHTML = "Freudian";
            artist.innerHTML = "Daniel Caesar";
            slength.innerHTML = "10 Songs";
            tlength.innerHTML = "44:51";
            release.innerHTML = "Aug 25, 2017";
            genre.innerHTML = "RnB";
        }

        if(oval == 101){//caesar
            chooser.remove();
            img.src="../images/Gemini Rights - Steve Lacy.jpg";
            title.innerHTML = "Gemini Rights";
            artist.innerHTML = "Steve Lacy";
            slength.innerHTML = "10 Songs";
            tlength.innerHTML = "35:01";
            release.innerHTML = "July 15, 2022";
            genre.innerHTML = "RnB";
        }

        if(oval == 201){//frankie
                chooser.remove();
                img.src="../images/Nectar - Joji.jpg";
                title.innerHTML = "Nectar";
                artist.innerHTML = "Joji";
                slength.innerHTML = "18 Songs";
                tlength.innerHTML = "53:14";
                release.innerHTML = "Sep 25, 2020";
                genre.innerHTML = "RnB";
        }

        if(oval == 300){// no1
            chooser.remove();
            img.src="../images/Dawn FM - The Weeknd.jpg";
            title.innerHTML = "Dawn FM";
            artist.innerHTML = "The Weeknd";
            slength.innerHTML = "16 Songs";
            tlength.innerHTML = "51:49";
            release.innerHTML = "Jan 6, 2022";
            genre.innerHTML = "RnB";
        }
    }

    if(sel == 5){
        if(oval == 1){//paras
            chooser.remove();
            img.src="../images/Siamese Dream - The Smashing Pumpkins.jpg";
            title.innerHTML = "Siamese Dream";
            artist.innerHTML = "The Smashing Pumpkins";
            slength.innerHTML = "13 Songs";
            tlength.innerHTML = "01:02:00";
            release.innerHTML = "July 27, 1993";
            genre.innerHTML = "Rock";
        }

        if(oval == 101){//deftones
            chooser.remove();
            img.src="../images/loveless - my bloody valentine.jpg";
            title.innerHTML = "loveless";
            artist.innerHTML = "my bloody valentine";
            slength.innerHTML = "11 Songs";
            tlength.innerHTML = "48:35";
            release.innerHTML = "Nov 4, 1991";
            genre.innerHTML = "Rock";
        }

        if(oval == 201){//nirvana
                chooser.remove();
                img.src="../images/Pinkerton - Weezer.jpg";
                title.innerHTML = "Pinkerton";
                artist.innerHTML = "Weezer";
                slength.innerHTML = "10 Songs";
                tlength.innerHTML = "34:37";
                release.innerHTML = "Sep 24, 1996";
                genre.innerHTML = "Rock";
        }

        if(oval == 300){// no1
            chooser.remove();
            img.src="../images/Twin_fantasy.jpg";
            title.innerHTML = "Twin Fantasy (2018)";
            artist.innerHTML = "Car Seat Headrest";
            slength.innerHTML = "10 Songs";
            tlength.innerHTML = "1:11:00";
            release.innerHTML = "Feb 16, 2018";
            genre.innerHTML = "Indie Rock";
        }
    }
}
