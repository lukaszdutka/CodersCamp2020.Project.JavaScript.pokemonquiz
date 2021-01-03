import {
    getPokemonById,
    getTypeById
} from "./pokemons.js";

describe('Test pokemon API to get pokemon', () => {

    it("Given pokemon id is 1 when asking for data, should get id, photoUrl, types, name of the pokemon", async () => {
        //given
        const pokemonId = 1;

        //when
        const pokeData = await getPokemonById(pokemonId)

        //then
        expect(pokeData).toEqual({
            id: 1,
            name: "bulbasaur",
            photoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            types: [{
                    id: 12,
                    type: "grass"
                },
                {
                    id: 4,
                    type: "poison"
                }
            ]
        });
    })
});


describe("Test pokemon API to get pokemon types", () => {

    it("Given the type id is 12 when asking for pokemon data, should return id and name of the type", async () => {
        //given
        const typeId = 12;

        //when
        const typeData = await getTypeById(typeId)

        //then
        expect(typeData).toEqual({
                id: 12,
                name: "grass"
            }
        );
    })
})