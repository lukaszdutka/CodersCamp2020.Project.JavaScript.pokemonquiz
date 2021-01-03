
// example result of calling getPokemonById(1):
// { id: 1, name: 'Bulbasaur', photoUrl: 'someurl', types: [ { id: 3, name: 'grass' }, { id: 6, name: 'poison' } ] }
// example result of calling getTypeById(3):
// { id: 3, name: 'grass' }

import { getPokemonById, getTypeById } from "../api/pokemons.js";

describe("Get pokemon details from API", function(){
    test("Should return pokemon details based on its id.", async () => {
        expect(getPokemonById(2)).toEqual("Surprise 2")
    })

    test("Should return type details by its Id", function(){
        expect(getTypeById(4)).toEqual("4test")
    })
})
