import fetch from "cross-fetch"

const POKEMON_API_BASE_URL = process.env.POKEMON_API_BASE_URL || "https://pokeapi.co/api/v2";

export async function getPokemonById(id) {
    const getTypeIdFromUrl = (url) => {
        const regex = /\/type\/(\d+)\/$/;
        return Number(regex.exec(url)[1])
    }

    const parseType = (type) => {
        return {
            id : getTypeIdFromUrl(type.type.url),
            type : type.type.name
        }
    };

    const res = await fetch(`${POKEMON_API_BASE_URL}/pokemon/${id}`);
    const jsonRes = await res.json()
    const { id: pokeId, name, types, sprites: { other: { "official-artwork": { front_default: artworkUrl} } } } = jsonRes; 
    const pokeData = {
        id: pokeId,
        name: name,
        types: types.map(parseType),
        photoUrl: artworkUrl
    }
    return pokeData
};

export function getTypeById(id) {
    return id + "test"
}
