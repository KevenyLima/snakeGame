let time= 10000
let i=0
let colisao=0

let idsFrutas
let fruitId
let playerId

const score_jogador1=document.getElementById('score jogador 1')
const score_jogador2=document.getElementById('score jogador 2')

const game ={
    players:{
        'player1':{x:1,y:1,score:0},
        'player2':{x:9,y:5,score:0},
    },
    fruits:{
        'fruit1':{x:3,y:1},
        'fruit2':{x:4,y:7}
    }
}

document.addEventListener('load',automove);
window.addEventListener('load',geraFruta)
document.addEventListener('keydown', colision);
//controls----------------------------------------
document.addEventListener('keydown', logKey);
document.addEventListener('keydown', logKey2);

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

function colision(){
    for(playerId in game.players){
        for(fruitId in game.fruits){
            if(game.players[playerId].x==game.fruits[fruitId].x && game.players[playerId].y == game.fruits[fruitId].y){
                delete game.fruits[fruitId]
                game.players[playerId].score++
                console.log("colidiu " + colisao)
                console.log(game.players[playerId].score)
                colisao++
                player1_score.innerHTML=`player1 score: ${game.players['player1'].score} `
                player2_score.textContent=`player2 score : ${game.players['player2'].score}`
            }
        }
    }

}

function automove(){

}
//-----------------------------------------------------
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

export {game}