// function gameObject() {'home': {'teamName': 'Brooklyn Nets', 'colors': 'Black/white', 'players': {'Alan Anderson': {'number': 0, 'shoe': 16, 'points': 22, 'rebounds': 12, 'assists': 12, 'steals': 3, 'blocks': 1, 'slam dunks': 1}, 'Reggie Evans': {'number': 30, 'shoe': 14, 'points': 12, 'rebounds': 12, 'assists': 12, 'steals': 12, 'blocks': 12, 'slam dunks': 7}, 'Brook Lopez': {'number': 11, 'shoe': 17, 'points': 17, 'rebounds': 19, 'assists': 10, 'steals': 3, 'blocks': 1, 'slam dunks': 15}, 'Mason Plumlee': {'number': 1, 'shoe': 19, 'points': 26, 'rebounds': 12, 'assists': 6, 'steals': 3, 'blocks': 8, 'slam dunks': 5}, 'Jason Terry': {'number': 31, 'shoe': 15, 'points': 19, 'rebounds': 2, 'assists': 2, 'steals': 4, 'blocks': 11, 'slam dunks': 1}}}, 'away': {'teamName': 'Charlotte Hornets', 'colors': 'turquoise/purple', 'players': {'Jeff Adrien': {'number': 4, 'shoe': 18, 'points': 10, 'rebounds': 1, 'assists': 1, 'steals': 2, 'blocks': 7, 'slam dunks': 2}, 'Bismak Biyombo': {'number': 0, 'shoe': 16, 'points': 12, 'rebounds': 4, 'assists': 7, 'steals': 7, 'blocks': 15, 'slam dunks': 10}, 'DeSagna Diop': {'number': 2, 'shoe': 14, 'points': 24, 'rebounds': 12, 'assists': 12, 'steals': 4, 'blocks': 5, 'slam dunks': 5}, 'Ben Gordon': {'number': 8, 'shoe': 15, 'points': 33, 'rebounds': 3, 'assists': 2, 'steals': 1, 'blocks': 1, 'slam dunks': 0}, 'Brendan Haywood': {'number': 33, 'shoe': 15, 'points': 6, 'rebounds': 12, 'assists': 12, 'steals': 22, 'blocks': 5, 'slam dunks': 12}}}}

function gameObject() {

    return teams = {
        home: {
        teamName: 'Brooklyn Nets',
        colors: 'Black/white',
        players: {
            'Alan Anderson': {
                number: 0, 
                shoe: 16, 
                points: 22, 
                rebounds: 12, 
                assists: 12, 
                steals: 3, 
                blocks: 1, 
                slamDunks: 1
            },
            'Reggie Evans': {
                number: 30, 
                shoe: 14, 
                points: 12, 
                rebounds: 12, 
                assists: 12, 
                steals: 12, 
                blocks: 12, 
                slamDunks: 7
            },
            'Brook Lopez': {
                number: 11, 
                shoe: 17, 
                points: 17, 
                rebounds: 19, 
                assists: 10, 
                steals: 3, 
                blocks: 1, 
                slamDunks: 15
            },
            'Mason Plumlee': {
                number: 1, 
                shoe: 19, 
                points: 26, 
                rebounds: 12, 
                assists: 6, 
                steals: 3, 
                blocks: 8, 
                slamDunks: 5
            },
            'Jason Terry': {
                number: 31, 
                shoe: 15, 
                points: 19, 
                rebounds: 2, 
                assists: 2, 
                steals: 4, 
                blocks: 11, 
                slamDunks: 1
            } 
        }  
    },

        away: {
            'teamName': 'Charlotte Hornets', 
            'colors': 'turquoise/purple', 
            'players': {
                'Jeff Adrien': {
                    number: 4, 
                    shoe: 18, 
                    points: 10, 
                    rebounds: 1, 
                    assists: 1, 
                    steals: 2, 
                    blocks: 7, 
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0, 
                    shoe: 16, 
                    points: 12, 
                    rebounds: 4, 
                    assists: 7, 
                    steals: 7, 
                    blocks: 15, 
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2, 
                    shoe: 14, 
                    points: 24, 
                    rebounds: 12, 
                    assists: 12, 
                    steals: 4, 
                    blocks: 5, 
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8, 
                    shoe: 15, 
                    points: 33, 
                    rebounds: 3, 
                    assists: 2, 
                    steals: 1, 
                    blocks: 1, 
                    slamDunks: 0
            }
            
        }

    }
    
}

}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}

function numPointsScored(player) {
    let game = gameObject();
    for (let gameKey in game) {
        debugger;
        let teamObj = game[gameKey];
        let playerObj = teamObj.players
        debugger;
        for (const playerKey in playerObj) {
             if (playerKey === player) {
            debugger;
            return playerObj[playerKey].points;
        }
       
    }
}
        
}
//numPointsScored('Ben Gordon');

function shoeSize(player) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (playerKey === player) {
                return playerObj[playerKey].shoe;
            }
        }
    }
}

function teamColors(team) {
    let game = gameObject();
    for (let gameKey in game) {
        if (gameKey === team) {
            return game[gameKey].colors
        }
    }
}

function teamNames() {
    let game = gameObject();
    let array = []
    debugger;
    for (let gameKey in game) {
        array.push(game[gameKey].teamName)
        debugger;
    }
    return array
}

function playerNumbers(name) {
    let game = gameObject();
    let numArray = [];
    for (gameKey in game) {
        debugger;
        if (gameKey === name) {
            debugger;
            let teamObj = game[gameKey];
            let playerObj = teamObj.players;
            for (playerKey in playerObj) {
                debugger;
                numArray.push(playerObj[playerKey].number)
                debugger;
                
            }
        }
    }
    return numArray
}

function playerStats(player) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (playerKey === player) {
                return playerObj[playerKey];
            }
        }
    }
}

function bigShoeRebounds() {
    let game = gameObject();
    let array = []
    let max = undefined
    for (let gameKey in game) {
        debugger;
        let teamObj = game[gameKey];
        let playerObj = teamObj.players
        debugger;
        for (const playerKey in playerObj) {
            array.push(playerObj[playerKey].shoe)
           max = Math.max(...array)
           debugger;
           
            
        }
    }
    return max
}

