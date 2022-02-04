let fruitId
let playerId
let idsFrutas
let i=0
let time= 1000
let colisao=0
const pontos_jogador1=document.getElementById('pontos jogador 1')
const pontos_jogador2=document.getElementById('pontos jogador 2')
const screen =document.getElementById('screen')
const context = screen.getContext('2d')


const color = 'red'
const positionY=0
const positionX=0
const width=10
const height=10
context.fillStyle = color
context.fillRect(positionX,positionY,width,height)
document.addEventListener('keydown', logKey);
document.addEventListener('keydown', logKey2);
document.addEventListener('keydown', colision);
document.addEventListener('load',automove);
window.addEventListener('load',geraFruta)
const game ={
    players:{
        'player1':{x:1,y:1,pontos:0},
        'player2':{x:9,y:5,pontos:0},
    },
    fruits:{
        'fruit1':{x:3,y:1},
        'fruit2':{x:4,y:7}
    }
}
/*function start(){
    setInterval(()=> {
        console.log(i++)
    },time)
   
   }*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
function geraFruta(){

    setInterval(()=> {
        idsFrutas= `fruit${i++}`
        // estrutura para adicionar ou criar objetos
        // caminho do objeto [id do objeto numero ou string]={
        // todos as propriedades e valores ficam aqui}
        game.fruits[idsFrutas]={
            x:getRandomInt(0,10),
            y:getRandomInt(0,10)
        }
        //funcao math.random retorna um valor float entre zero e 1.
        // funçao que gera um valor aleatorio entre dois numeros
        // function getRandomArbitrary(min, max) {
        //      return Math.random() * (max - min) + min;
        // }
     },time)

}
function automove(){

}
function colision(){
    for(playerId in game.players){
        for(fruitId in game.fruits){
            if(game.players[playerId].x==game.fruits[fruitId].x && game.players[playerId].y == game.fruits[fruitId].y){
                delete game.fruits[fruitId]
                game.players[playerId].pontos++
                console.log("colidiu " + colisao)
                console.log(game.players[playerId].pontos)
                colisao++
                pontos_jogador1.innerHTML=`pontos jogador 1: ${game.players['player1'].pontos} `
                pontos_jogador2.textContent=`pontos jogador 2: ${game.players['player2'].pontos}`
            }
        }
    }

}
renderScreen()
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

function logKey(e) {
    log.textContent = ` ${e.code}`;
    const player = game.players["player1"]  
    if(e.code=='ArrowUp' && player.y>0){
        player.y--      
    }
    if(e.code=='ArrowDown'&& player.y<9){
        player.y++
    }
    if(e.code=='ArrowRight'&& player.x<9){
        player.x++
    }
    if(e.code=='ArrowLeft'&& player.x>0){
        player.x--
        //game.players["player1"]={x:game.players["player1"].x-1,y:game.players["player1"].y}
    }
}
function logKey2(e) {
    log.textContent = ` ${e.code}`; 
    //player 2
    const player2 = game.players["player2"]  
    if(e.code=='KeyW'&& player2.y>0){
        player2.y--
    }
    if(e.code=='KeyS'&& player2.y<9){
        player2.y++
    }
    if(e.code=='KeyD'&& player2.x<9){
        player2.x++
    }
    if(e.code=='KeyA'&& player2.x>0){
        player2.x--
       
    }
}

