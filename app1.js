function getUserName(){
    let userName = prompt("Please enter your name")

    if(userName == "Ibraheem"){
        document.write("Welcome Gamer Nerd " + userName)
    }
    else {
        document.write("Welcome Gamer Nerd " + userName)
    }
}

function userAnswer(){
    console.log("hello world2")

    let userAnswer = prompt("Would you like to stay updated on more upcoming games?")
    console.log(userAnswer)
    if(userAnswer.toLocaleLowerCase() == 'yes'){
        let url = "https://www.tutorialrepublic.com/snippets/designs/simple-sign-up-form-with-blue-background.png"
        document.write("<img src=" + url + '>')
    }
}

function userChoice(){
    let userChoice = prompt("Would you like to see a picture of another upcoming game?")
    console.log(userAnswer)
    if(userChoice.toLocaleLowerCase() == 'yes'){
        let url = "https://games-b26f.kxcdn.com/wp-content/uploads/2021/03/Gotham-Knight-770x470.jpg"
        document.write("<img src=" + url + '>')
    }
    
}

// write a loop that asks the user "What year was Battlefield 4 released?"
// deduct from the amount of attempts they have left, give 4 tries to get correct answer.
// give user another chance to try again.

function battleField(){
    let battleField = prompt('What year was Battlefield 4 released?')
    let numberOfAttempts = 4;
    for(let i = 1; i <= numberOfAttempts; i++){
        battleField = prompt('What year was Battlefield 4 released?')
        if (battleField == 2013){
            alert("Correct!!");
            break;
        } else if (battleField < 2013){
            alert("Answer is too low, try again!")
        } else if (battleField > 2013){
            alert("Answer is too high, try again!")
        }
    }
}