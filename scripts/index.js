import Sounds from "./sounds.js"
import Timer from "./timer.js"
import LayoutControls from "./layoutControls.js"


let buttonPlay = document.querySelector(".button-play")
let buttonStop = document.querySelector(".button-stop")
let buttonPlus = document.querySelector(".button-plus")
let buttonSubtraction = document.querySelector(".subtraction")
let forest = document.querySelector(".forest")
let forestSelect = document.querySelector(".forest.select")
let rain = document.querySelector(".rain")
let rainSelect = document.querySelector(".rain.select")
let coffee = document.querySelector(".coffee")
let coffeeSelect = document.querySelector(".coffee.select")
let firePlace = document.querySelector(".fireplace")
let firePlaceSelect = document.querySelector(".fireplace.select")
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let minutesSet = Number(minutesDisplay.textContent)

const sound = Sounds()

const timer = Timer({
  minutes,
  seconds,
  minutesDisplay,
  secondsDisplay
})

const layoutControls = LayoutControls({
  forest,
  rain,
  coffee,
  firePlace,
  forestSelect,
  rainSelect,
  coffeeSelect,
  firePlaceSelect
})

function stopTime(){
  seconds = 0
  minutes = minutesSet
  timer.reset()
  timer.UpdateTimeDisplay(minutesSet, String(0))
  buttonPlay.classList.remove('on')
}

function addMinutes(){
  if(minutes <= 58){  
    minutesSet = minutesSet+5
    minutes = minutesSet
    timer.UpdateTimeDisplay(minutesSet,0)
  }
  else{
    alert('Você não adicionar mais minutos')
    return
  }
}

function subMinutes(){
  if(minutes >= 1){  
    minutesSet = minutesSet-5
    minutes = minutesSet
    timer.UpdateTimeDisplay(minutesSet, 0)
  }
  else{
    alert('Você não pode adicionar mais minutos')
    return
  }
}

buttonPlay.addEventListener('click', function(){
  timer.countDown()

  buttonPlay.classList.add('on')
})

buttonPlus.addEventListener('click', addMinutes)

buttonSubtraction.addEventListener('click', subMinutes)

buttonStop.addEventListener('click',stopTime )


