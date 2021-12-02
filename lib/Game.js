const inquirer = require('inquirer')
const Enemy = require('./Enemy')
const Player = require('./Player')

function Game() {
    this.roundNumber = 0
    this.isPlayerTurn = false
    this.enemies = []
    this.currentEnemy
    this.player
}
Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('jerk', 'sword'))
    this.enemies.push(new Enemy('goat', 'chainsaw'))
    this.enemies.push(new Enemy('dave', 'golf club'))

    this.currentEnemy = this.enemies[0]

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        .then(({name}) => {
            this.player = new Player(name)

            this.startNewBattle()
        })
}


module.exports = Game