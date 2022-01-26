
import { game } from "./gameRules.js"
const screen =document.getElementById('screen')
const context = screen.getContext('2d')

const color = 'red'
const positionY=0
const positionX=0
const width=10
const height=10
context.fillStyle = color
context.fillRect(positionX,positionY,width,height)

let playerId
let fruitId


function renderScreen(){
    context.fillStyle = color
    context.fillRect(positionX,positionY,width,height)
    for(playerId in game.players){
        const player =game.players[playerId]
        context.fillStyle='black'
        context.fillRect(player.x,player.y,1,1)
    }
    for(fruitId in game.fruits){
        const fruit =game.fruits[fruitId]
        context.fillStyle='green'
        context.fillRect(fruit.x,fruit.y,1,1)
    }
    
    requestAnimationFrame(renderScreen)
    }

renderScreen()

