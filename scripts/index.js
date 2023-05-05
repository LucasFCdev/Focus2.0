import Sounds from "./sounds.js"

let timerTimeOut
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

function UpdateTimeDisplay (minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown(){
  timerTimeOut = setTimeout(function(){

    if (minutes == 0 && seconds == 0){
      stopTime()
      return
    }    

    if(seconds == 0){
      minutes--;
      seconds = 5
      console.log("marquei os minutos")
    }

    seconds--

    UpdateTimeDisplay(minutes, seconds)

    countDown()

  }, 1000)
}

function stopTime(){
  seconds = 0
  minutes = minutesSet
  clearTimeout(timerTimeOut)
  UpdateTimeDisplay(minutesSet, String(0))
  buttonPlay.classList.remove('on')
}

function addMinutes(){
  if(minutes <= 58){  
    minutesSet = minutesSet+5
    minutes = minutesSet
    UpdateTimeDisplay(minutesSet,0)
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
    UpdateTimeDisplay(minutesSet, 0)
  }
  else{
    alert('Você não pode adicionar mais minutos')
    return
  }
}

buttonPlay.addEventListener('click', function(){
  countDown()

  buttonPlay.classList.add('on')
})

buttonPlus.addEventListener('click', addMinutes)

buttonSubtraction.addEventListener('click', subMinutes)

buttonStop.addEventListener('click',stopTime )


forest.addEventListener('click', function(){
  forestSelect.classList.remove('hide')
  rainSelect.classList.add('hide')
  coffeeSelect.classList.add('hide')
  firePlaceSelect.classList.add('hide')

  forest.classList.add('hide')
  rain.classList.remove('hide')
  coffee.classList.remove('hide')
  firePlace.classList.remove('hide')

  sound.forestSound.play()
  sound.rainSound.pause()
  sound.coffeeSound.pause()
  sound.firePlaceSound.pause()
})

rain.addEventListener('click', function(){
  forestSelect.classList.add('hide')
  rainSelect.classList.remove('hide')
  coffeeSelect.classList.add('hide')
  firePlaceSelect.classList.add('hide')

  forest.classList.remove('hide')
  rain.classList.add('hide')
  coffee.classList.remove('hide')
  firePlace.classList.remove('hide')

  sound.forestSound.pause()
  sound.rainSound.play()
  sound.coffeeSound.pause()
  sound.firePlaceSound.pause()
})

coffee.addEventListener('click', function(){
  forestSelect.classList.add('hide')
  rainSelect.classList.add('hide')
  coffeeSelect.classList.remove('hide')
  firePlaceSelect.classList.add('hide')

  forest.classList.remove('hide')
  rain.classList.remove('hide')
  coffee.classList.add('hide')
  firePlace.classList.remove('hide')

  sound.forestSound.pause()
  sound.rainSound.pause()
  sound.coffeeSound.play()
  sound.firePlaceSound.pause()
})

firePlace.addEventListener('click', function(){
  forestSelect.classList.add('hide')
  rainSelect.classList.add('hide')
  coffeeSelect.classList.add('hide')
  firePlaceSelect.classList.remove('hide')

  forest.classList.remove('hide')
  rain.classList.remove('hide')
  coffee.classList.remove('hide')
  firePlace.classList.add('hide')

  sound.forestSound.pause()
  sound.rainSound.pause()
  sound.coffeeSound.pause()
  sound.firePlaceSound.play()
})