class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hideFunction();
    textSize(30);
    text("Game Start", 120, 300);
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var displayposition = 130;
      for(var plr in allPlayers){
        if(plr === "player" + player.index){
          fill("red");
          
        }
        else{
          fill("blue");
        }
        displayposition = displayposition+20;
        textSize(15)
        text(allPlayers[plr].name + ":"+allPlayers[plr].distance, 120,displayposition);
      }
    }
    if(keyIsDown(UP_ARROW)&&player.index !== null){
      player.distance = player.distance + 10;
      player.update();
    }
  }
}
