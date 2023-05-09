import Timer from "./timer.js"

export default function TimerControls ({
  seconds,
  minutesSet,
  buttonPlay,
  UpdateTimer
}){

  const timer = Timer()

  function stopTime(){
    seconds = 0
    UpdateTimer()
    timer.reset()
    timer.UpdateTimeDisplay(minutesSet, String(0))
    buttonPlay.classList.remove('on')
  }

  function addMinutes(){
    if(minutes <= 58){  
      minutesSet = minutesSet+5
      UpdateTimer()
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
      UpdateTimer()
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

  return{
    stopTime,
    addMinutes,
    subMinutes,
  }
}