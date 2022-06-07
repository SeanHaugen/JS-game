let player;


function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        //who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
               //player attack
               let playerAttack = () => {
                let calcBaseDamage; 
                if (player.mana > 0) {
                    calcBaseDamage = player.strength * player.mana / 1000;  
                } else {
                    calcBaseDamage = player.strength * player.agility / 1000;
                }
               
                let offsetDamage = Math.floor(Math.random() * 10);
                let calcOutputDamage = calcBaseDamage + offsetDamage;
                //Number of hits
                let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
                let attackValues = [calcOutputDamage, numberOfHits ];
                return attackValues;
            }
    
            //get player/enemy health to change later!
            let getPlayerhealth = document.querySelector(".health-player")
            let getEnemyhealth = document.querySelector(".health-enemy")
            //initiate attacks!
            if (getPlayerSpeed >= getEnemySpeed) {
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues [0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit for " + playerAttackValues[0] + " damage " + playerAttackValues[1] +" times.");
                if (enemy.health <= 0) {
                    alert("you Win! Refresh the browser to play again");
                    getPlayerhealth.innerHTML = 'health: ' + player.health;
                    getEnemyhealth.innerHTML = 'health: 0';
                } else {
                    getEnemyhealth.innerHTML = 'health: ' + enemy.health;
                    //Enemy attacks
                    let enemyAttackValues = enemyAttack();
                    let totalDamage = enemyAttackValues [0] * enemyAttackValues[1];
                    player.health = player.health - totalDamage;
                alert("Enemy hit for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("you lose! Refresh the browser to play again");
                    getPlayerhealth.innerHTML = 'Health: 0'
                    getEnemyhealth.innerHTML = 'health:' + enemy.health;
    
                } else {
                    getPlayerhealth.innerHTML = 'health:' + player.health;
                }
    
            }
            
        }
         else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues [0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("enemy hit for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] +" times.");
            if (player.health <= 0) {
                alert("you lose! Refresh the browser to play again");
                getEnemyhealth.innerHTML = 'health: ' + player.health;
                getPlayerhealth.innerHTML = 'health: 0';
            } else {
                getPlayerhealth.innerHTML = 'health: ' + player.health;
                //Enemy attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues [0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
            alert("You hit for " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                alert("you win! Refresh the browser to play again");
                getEnemyhealth.innerHTML = 'Health: 0'
                getPlayerhealth.innerHTML = 'health:' + player.health;

            } else {
                getEnemyhealth.innerHTML = 'health:' + enemy.health;
            }

        }
        
    }
        
        

    }
 

}