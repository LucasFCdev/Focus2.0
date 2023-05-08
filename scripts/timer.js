
export default function Timer({
  minutes,
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
    console.log("cheguei na função")
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