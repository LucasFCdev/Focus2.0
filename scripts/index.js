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

function UpdateTimeDisplay (minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown(){
  timerTimeOut = setTimeout(function(){

    if (minutes == 0 && seconds == 0){
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

function addMinutes(){
  if(minutes <= 58){  
    minutes++
    minutesSet = minutes
    UpdateTimeDisplay(minutes,0)
  }
  else{
    alert('Você não adicionar mais minutos')
    return
  }
}

function subMinutes(){
  if(minutes >= 1){  
    minutes--
    minutesSet = minutes
    UpdateTimeDisplay(minutes, 0)
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
buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeOut)
  UpdateTimeDisplay(minutesSet, String(0))
  buttonPlay.classList.remove('on')
})


forest.addEventListener('click', function(){
  forestSelect.classList.remove('hide')
  rainSelect.classList.add('hide')
  coffeeSelect.classList.add('hide')
  firePlaceSelect.classList.add('hide')

  forest.classList.add('hide')
  rain.classList.remove('hide')
  coffee.classList.remove('hide')
  firePlace.classList.remove('hide')
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
})