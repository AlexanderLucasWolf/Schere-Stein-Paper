let playerInput = ""
let computerInput = ""
let computerOutput = ""
let randomNumber = ""
let result = ""
let winnerMessage = ""
let score = 0
let resultEl = document.getElementById('result-el')
let scoreEl = document.getElementById('score-el')
let playerEl = document.getElementById('game-el1')
let computerEl = document.getElementById('game-el3')


function computerInputFunction(){
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    computerInput = "rock"
  }
  else if (randomNumber == 1) {
    computerInput = "paper"
  }
  else {
    computerInput = "scissor"
  }
  console.log(computerInput)
}



function whoWon(){
  if (playerInput == "rock" && computerInput == "rock") {
    result = "draw"
  }
  else if (playerInput == "rock" && computerInput == "paper") {
    result = "loser"
  }
  else if (playerInput == "rock" && computerInput == "scissor") {
    result = "winner"
  }
  else if (playerInput == "paper" && computerInput == "rock") {
    result = "winner"
  }
  else if (playerInput == "paper" && computerInput == "paper") {
    result = "draw"
  }
  else if (playerInput == "paper" && computerInput == "scissor") {
    result = "loser"
  }
  else if (playerInput == "scissor" && computerInput == "rock") {
    result = "loser"
  }
  else if (playerInput == "scissor" && computerInput == "paper") {
    result = "winner"
  }
  else if (playerInput == "scissor" && computerInput == "scissor") {
    result = "draw"
  }
  else {
    console.log("Something went wrong (function whoWon())")
  }
}

function createMessage(){
  if (result == "winner") {
    score += 1
    message = "Du hast gewonnen!"
  }
  else if (result == "loser") {
    score -= 1
    message = "Du hast verloren!"
  }
  else if (result == "draw") {
    score = score
    message = "Unentschieden!"
  }
  else {
    console.log("Something went wrong (function createMessage())")
  }
}

function textIntoEmoji(){
  if (computerInput == "rock") {
    computerOutput = "✊"
  }
  else if (computerInput == "paper") {
    computerOutput = "✋"
  }
  else if (computerInput == "scissor") {
    computerOutput = "✌️"
  }
}


function enterRock(){
  playerInput = "rock"
  computerInputFunction()
  whoWon()
  createMessage()
  resultEl.textContent = message
  scoreEl.textContent = "Score: " + score
  textIntoEmoji()
  playerEl.textContent = "✊"
  computerEl.textContent = computerOutput
}

function enterPaper(){
  playerInput = "paper"
  computerInputFunction()
  whoWon()
  createMessage()
  resultEl.textContent = message
  scoreEl.textContent = "Score: " + score
  textIntoEmoji()
  playerEl.textContent = "✋"
  computerEl.textContent = computerOutput
}

function enterScissor(){
  playerInput = "scissor"
  computerInputFunction()
  whoWon()
  createMessage()
  resultEl.textContent = message
  scoreEl.textContent = "Score: " + score
  textIntoEmoji()
  playerEl.textContent = "✌️"
  computerEl.textContent = computerOutput
}
