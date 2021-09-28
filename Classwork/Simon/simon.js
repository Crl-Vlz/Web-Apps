const colors = ["red", "blue", "green", "yellow"];
var simonChoice = [];
var playerChoice = [];
var game = false;
var explorer = 0;
var level = 0;

function randomColor(){
    return colors[Math.floor(Math.random()*4)];
}

function checkAnswer(colour){
    if (colour === simonChoice[explorer]){
        explorer++;
        if (explorer > level){
            explorer = 0;
            setTimeout(() =>{
                level++;
                nextSequence(level);
            }, 1000);
        }
    }       
    else{
        new Audio("sounds/wrong.mp3").play();
        simonChoice = [];
        //audio.play();
        game = false;
        explorer = 0;
        level = 0;
        $("h1").text("You Fail...\nPress Any Key To Try Again");
    }
}

function playAudio(colour){
    var audio = new Audio("sounds/"+colour+".mp3");
    audio.play();
}

function animatePress(colour){
    var id = "#" + colour;
    $(id).fadeOut("fast");
    $(id).fadeIn("fast");
    var el = document.getElementById(colour);
    el.classList.add("pressed");
    setTimeout(() => {
        el.classList.remove("pressed");
    }, 100);
}

function activeBtn(colour){
    playAudio(colour);
    animatePress(colour);
}

function playSequence(){
    simonChoice.forEach((element, index) => {
        setTimeout(() => {
            activeBtn(element);
        }, 500 * index);        
    });
}

function nextSequence(level){
    game = true;
    $("h1").text("Level "+ level);
    var colour = randomColor();
    simonChoice.push(colour);
    playSequence();    
};

document.querySelectorAll(".btn").forEach(element => { element.addEventListener("click", function(){
    var colour = element.classList[1];
    if (game){
        activeBtn(colour);
        checkAnswer(colour, level);
    }
})});

$(document).keydown(() => {
    level = 0;
    if (!game)
        nextSequence(level);
});