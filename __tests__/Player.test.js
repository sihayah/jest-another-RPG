const { TestWatcher } = require('@jest/core')
const Player = require('../lib/Player')
const Potion = require('../lib/Potion')

jest.mock('../lib/Potion')

console.log(new Potion())

test('creates a player object', () => {
    const player = new Player('notDave')

    expect(player.name).toBe('notDave')
    expect(player.health).toEqual(expect.any(Number))
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number))
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]))
})