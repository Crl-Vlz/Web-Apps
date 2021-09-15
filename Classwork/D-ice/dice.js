function getDice(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
};

function showDice(n, name){
    switch(n){
        case 1:
            $(name).attr("src", "images/dice1.png");
            break;
        case 2:
            $(name).attr("src", "images/dice2.png");
            break;
        case 3:
            $(name).attr("src", "images/dice3.png");
            break;
        case 4:
            $(name).attr("src", "images/dice4.png");
            break;
        case 5:
            $(name).attr("src", "images/dice5.png");
            break;
        case 6:
            $(name).attr("src", "images/dice6.png");
            break;
        default:
            alert("Invalid value");
            break;
    }
}

function calculateDice(){
    var playerOne = getDice();
    var playerTwo = getDice();
    showDice(playerOne, ".img1");
    showDice(playerTwo, ".img2");
    if (playerOne < playerTwo){
        $("h1").text("Player 2 won!");
    }
    else if(playerTwo < playerOne){
        $("h1").text("Player 1 won!");
    }
    else{
        $("h1").text("It's a tie...");
    }
}

function clickedRefresh(){
    alert("Click the header to roll the dice!");
    $("h1").click((e) => {calculateDice();});
}

$(document).ready(clickedRefresh());