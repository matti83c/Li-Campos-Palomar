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
    chooser.remove();
    if(oval == 2){ //like bts
        chooser.remove();
        title.innerHTML = "Hiiiiii";
        artist.innerHTML = "Hiiiiii";
        slength.innerHTML = "Hiiiiii";
        tlength.innerHTML = "Hiiiiii";
        release.innerHTML = "Hiiiiii";
        genre.innerHTML = "Hiiiiii";
    }

}
