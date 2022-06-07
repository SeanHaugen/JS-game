let enemy;


function Enemy(enemyType, health, mana, strength, agility, speed) {
    this.enemyType = enemyType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}


//enemy attack
        let enemyAttack = () => {
            let calcBaseDamage; 
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;  
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
           
            let offsetDamage = Math.floor(Math.random() * 10);
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits ];
            return attackValues;
        }

    