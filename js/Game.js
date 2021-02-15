class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 

        }


        // Give movements for the players using arrow keys
        if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.x=player.x-50;
            player.update();
          }
          if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.x=player.x+50;
            player.update();
          }

        // Create and spawn fruits randomly
        var select_fruit=Math.round(random(1,5));

          if(frameCount%80===0){
            switch(select_fruit){
                case 1:
                    apple();
                break;

                case 2:
                    banana();
                break;

                case 3:
                    melon();
                break;

                case 4:
                    orange();
                break;
                    pineapple();
                default:

            }
          }
        
    }

    end(){
       console.log("Game Ended");
    }

    apple(){
        var fruit1=createSprite(0,Math.round(random(0,700)),10,10);
        fruit1.addImage(fruit1_img);
        fruit1.velocityY=5;
        fruit1.lifetime=900;
        fruit1Group.add(fruit1);
    }

    banana(){
        var fruit2=createSprite(0,Math.round(random(0,700)),10,10);
        fruit2.addImage(fruit2_img);
        fruit2.velocityY=5;
        fruit2.lifetime=900;
        fruit2Group.add(fruit2);
    }

    melon(){
        var fruit3=createSprite(0,Math.round(random(0,700)),10,10);
        fruit3.addImage(fruit3_img);
        fruit3.velocityY=5;
        fruit3.lifetime=900;
        fruit3Group.add(fruit3);
    }

    orange(){
        var fruit4=createSprite(0,Math.round(random(0,700)),10,10);
        fruit4.addImage(fruit4_img);
        fruit4.velocityY=5;
        fruit4.lifetime=900;
        fruit4Group.add(fruit4);
    }

    pineapple(){
        var fruit5=createSprite(0,Math.round(random(0,700)),10,10);
        fruit5.addImage(fruit5_img);
        fruit5.velocityY=5;
        fruit5.lifetime=900;
        fruit5Group.add(fruit5);
    }
}