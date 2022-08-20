import  {testFN,getDadJoke}   from './test'
import {v4 as uuidfn} from  'uuid'
import './styles/main.scss'
import smiley from './assets/smiley.png'

let image = document.getElementById('smileImage')
let getJoke = document.getElementById('dadJoke')
getJoke.addEventListener('click',getDadJoke)
image.src = smiley
image.style.height = '60px'
image.style.width = '60px'
console.log(123)
console.log(uuidfn())
testFN()