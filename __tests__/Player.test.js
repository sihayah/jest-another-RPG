const { TestWatcher } = require('@jest/core')
const Player = require('../lib/Player')
const Potion = require('../lib/Potion')

jest.mock('../lib/Potion')

test('creates a player object', () => {
    const player = new Player('notDave')

    expect(player.name).toBe('notDave')
    expect(player.health).toEqual(expect.any(Number))
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number))
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]))
})

test("gets player's stats as an object", () => {
    const player = new Player('notDave')

    expect(player.getStats()).toHaveProperty('potions')
    expect(player.getStats()).toHaveProperty('health')
    expect(player.getStats()).toHaveProperty('strength')
    expect(player.getStats()).toHaveProperty('agility')
})

test('gets inventory from the player or returns false', () => {
    const player = new Player('notDave')

    expect(player.getInventory()).toEqual(expect.any(Array))
    player.inventory = []
    expect(player.getInventory()).toEqual(false)
})