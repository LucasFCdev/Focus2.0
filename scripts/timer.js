
export default function Timer({
  minutesSet,
  seconds,
  minutesDisplay,
  secondsDisplay
}){ 

  let timerTimeOut
  
  function UpdateTimeDisplay (minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset(){
    clearTimeout(timerTimeOut)
  }

  function UpdateTime(newMinutes){
    minutesSet = newMinutes
  }

  function countDown(){
    timerTimeOut = setTimeout(function(){
      
      let minutes = Number(minutesDisplay.textContent)

      if (minutes == 0 && seconds == 0){
        stopTime()
        return
      }    

      if(seconds == 0){
        minutes--;
        seconds = 5
      }

      seconds--

      UpdateTimeDisplay(minutes, seconds)

      countDown()

    }, 1000)
  }

  return{
    UpdateTimeDisplay,
    countDown,
    reset,
  }

}