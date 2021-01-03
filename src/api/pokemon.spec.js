import { getPokemonById, getTypeById } from "./pokemons.js";

describe('Test pokemon API to get pokemon', () => {

    describe("Given pokemon id is 1", () => {
        const pokeId = 1;

      describe("When asking for pokemon data", async () => {
        const pokeData = await getPokemonById(pokeId);

        describe("Then it should", () => {

            it(`have data with id = ${pokeId}`, () => {
                expect(pokeData.id).toEqual(pokeId);
            })

            it("have name: bulbasaur", () => {
                expect(pokeData.name).toEqual("bulbasaur");
            })

            it("have url to an artwork image", () => {
                expect(pokeData.url).toEqual("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png");
            })

            it("have array with a list of types and their ids", () => {
                expect(pokeData).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: 4,
                            type: "poisson"
                        },
                        {
                            id: 12,
                            type: "grass"
                        }
                        )
                ]))
            });
        });
      });
    });
  });

// describe("Test pokemon API to get pokemon types", () => {
//     describe("Given the type id is 4", () => {
//         const typeId = 4;
//     })
// })
