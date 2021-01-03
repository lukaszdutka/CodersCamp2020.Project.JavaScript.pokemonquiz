import { getPokemonById, getTypeById } from "./pokemons.js";

describe('Test pokemon API to get pokemon', () => {

    describe("Given pokemon id is 1", () => {
        const pokeId = 1;

      describe("When asking for pokemon data", () => {
          let pokeData;
          beforeAll( async () => {pokeData = await getPokemonById(pokeId)});
          
        describe("Then it should", () => {

            it(`have data with id = ${pokeId}`, () => {
                expect(pokeData.id).toEqual(pokeId);
            })

            it("have name: bulbasaur", () => {
                expect(pokeData.name).toEqual("bulbasaur");
            })

            it("have url to an artwork image", () => {
                expect(pokeData.photoUrl).toEqual("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png");
            })

            it("have array with a list of types and their ids", () => {
                expect(pokeData.types).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining(
                            {
                                id: 12,
                                type: "grass"
                            },
                            {
                                id: 4,
                                type: "poisson"
                            },
                        )
                ]))
            });
        });
      });
    });
  });

describe("Test pokemon API to get pokemon types", () => {

    describe("Given the type id is 4", () => {
        const typeId = 12;

        describe("When asking for pokemon data", () => {
            let typeData;
            beforeAll( async () => {typeData = await getTypeById(typeId)});
            describe("Then it should", () => {
                it(`have type id = ${typeId} and type name: grass`, () => {
                    expect(typeData).toEqual(
                        expect.objectContaining({
                            id: 12,
                            name: "grass"
                        })
                    );
                })
            })
        })
    })
    
})
