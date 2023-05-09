import Sounds from "./sounds.js"

export default function layoutControls({
  forest,
  rain,
  coffee,
  firePlace,
  forestSelect,
  rainSelect,
  coffeeSelect,
  firePlaceSelect,
})
{
const sound = Sounds()

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



}