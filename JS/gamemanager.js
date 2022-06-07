let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFightMethod();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Ranger":
                player = new Player(classType, 125, 50, 50, 200, 50 );
                break;
            case "Barbarian":
                player = new Player(classType, 200, 0, 200, 50, 50 );
                break;
            case "Fighter":
                player = new Player(classType, 150, 0, 150, 100, 50 );
                break;
            case "Hunter":
                player = new Player(classType, 80, 50, 100, 100, 100 );
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = `<img src="JS/img/${classType.toLowerCase()}.jpg" class="img-avatar">
        <div><h3>${classType}</h3>
        <p class="health-player"> Health: ${player.health} </p>
        <p>Mana: ${player.Mana} </p>
        <p>Strength: ${player.strength} </p>
        <p>Agility: ${player.agility} </p>
        <p>speed: ${player.speed}</p>
        </div>` ; 
    },
    setPreFightMethod: function () {
        let getHeader = document.querySelector (".header");
        let getActions = document.querySelector (".actions");
        let getArena = document.querySelector (".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>'; 
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>';
        getArena.style.visibility = "visible" ;
    },
    setFight: function() {
        let getHeader = document.querySelector (".header");
        let getActions = document.querySelector (".actions");
        let getEnemy = document.querySelector (".enemy");
        //create enemy!
        let enemy00 = new Enemy("Goblin", 50, 0, 50, 25, 25);
        let enemy01 = new Enemy("Ghoul", 150, 10, 100, 25, 10);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML ='<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = `<img src="JS/img/${enemy.enemyType.toLowerCase()}.jpg" alt"${enemy.enemyType}" class="img-avatar">
        <div>
        <h3> ${enemy.enemyType} </h3>
        <p class="health-enemy">Health: ${enemy.health}</p>
        <p>Mana: ${enemy.mana}</p>
        <p>strength: ${enemy.strength}</p>
        <p>agility: ${enemy.agility}</p>
         <p>Speed: ${enemy.speed} </p>
         </div>`;
    }

}