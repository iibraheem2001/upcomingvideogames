console.log("hello world2")

let userAnswer = prompt("Would you like to stay updated on more upcoming games?")
console.log(userAnswer)
if(userAnswer.toLocaleLowerCase() == 'yes'){
    let url = "https://www.tutorialrepublic.com/snippets/designs/simple-sign-up-form-with-blue-background.png"
    document.write("<img src=" + url + '>')
}