//BLACKJACKGAME
let Cards = []
 let sumb = 0
 console.log(sumb)
 let hasBlackJack = false
  let isAlive = false
  let messageEl = document.getElementById("message-el")
 console.log(messageEl)
 let sumEl = document.getElementById("sum-el")

 console.log(sumEl) 
 let cardsEl = document.querySelector("#cards-el")
console.log(cardsEl) 

let message = ""

let player = {
   name: 'Per',
   chips: 145
}


let playerEl = document.getElementById("player-El")
playerEl.textContent = player.name + ":$" + player.chips

function randomCard(){

  let random = Math.floor(Math.random()*13) + 1
  if (random > 10){
    return 10
  } else if (random === 1) {
    return 11
  } else {
  return random

  }
  console.log(random)
}



let floor = Math.floor(12.99)
  console.log(floor)

function startGame(){
  isAlive = true
  let firstCard = randomCard()
let secondCard = randomCard()
Cards = [firstCard, secondCard]
sumb = firstCard + secondCard
renderGame()
}

function renderGame(){
cardsEl.textContent = 'Cards:'
  for(let i = 0; i < Cards.length; i ++){
    cardsEl.textContent += Cards[i] + " "
  }

 if (sumb <= 20){
  message = 'Do you want to draw a new card?'
 } else if (sumb === 21){
  message = 'whoo! you have gotten blackjack'
  hasBlackJack = true
  

 }else {
  message = 'you are out of the game'
  isAlive = false
 }
console.log(message)
messageEl.textContent = message
sumEl.textContent = 'Sum:' + sumb

// console.log(messageEl.textContent)
// console.log(hasBlackJack)
// console.log(isAlive)

}

let newCardEl = document.querySelector("#newCard-el")
console.log(newCardEl)

function newCard(){ 
  if (isAlive === true && hasBlackJack === false){
     let card = randomCard()
  Cards.push(card)
  sumb += card 
 
  renderGame()
   console.log(Cards)
  }
 
  // message = "Draw a new card from the deck"
 
  // console.log("Draw a new card from the deck")
  
 
 
  //  messageEl.textContent = message
}


//  let age = 22
//  if (age < 21){
//   console.log('you can not entered the club')
//  }else{
//   console.log('welcome!')
//  }

//  let Old = 156
//  if (Old < 100){
//   console.log('Not eligble')
//  } else if (Old === 100){
//   console.log('Here is your birthday card from the king!')
//  }else {
//   console.log('Not eligible. you have already gotten one')
//  }

// let array = ['me', 'Myself', 'i', 'you', 'our']

// for (let i = 0; i < array.length; i ++ ){
//   console.log(array[i])
// }

//LOGICAL OPERATORS
let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge == false && hasHintsLeft === false){
  showSolution()
}
function showSolution(){
  console.log('showing the soltuion.....')
}
let likes = true 
let likesStartups = false 

if (likes === true || likesStartups === true){
  recommendMovie()
}

function recommendMovie(){
  console.log('Hey, check out this new film we thik you will like')
}

//OBJECTS

let course = {
  title: "learn css Grid for free",
  lessons: 10,
  creator: "Per Harold Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"]
}
console.log(course.length)
console.log(course.creator)

let castle = {
  isReal: true,
  title: "live like a king",
  value: 45,
  tags: ['html', "css"]
}
console.log(castle.title)
console.log(castle.value)

let age = 15
if (age < 6){
  console.log("free")
} else if(age <= 18){
  console.log("child discount")
}else if(age <= 27){
  console.log("student discount")
}else if ( age <= 67){
  console.log("full price")
}else{
  console.log("senior citizen discount")
}

//LOOPS AND ARRAYS

let countries = ["china", "india", "usa", "indonesia", "paskistan"]

for( let i = 0; i < countries.length; i++){
  console.log(countries[i])
}

let largeCountries = ["tuvalu", "india", "usa", "indonesia", "monaco"]

largeCountries.pop()
largeCountries.push("pastikan")
largeCountries.shift()
largeCountries.unshift("china")
console.log(largeCountries)

let hands = ["rock", "paper", "scissor"]

function getHand(){
  let randomIndex = Math.floor(Math.random()*3)
  return hands[randomIndex]
}
console.log(getHand())
