import { format } from "prettier"
import { App } from "../app/App"

const POKEMON_API_BASE_URL = process.env.POKEMON_API_BASE_URL || "https://pokeapi.co/api/v2/";

export async function getPokemonById(id) {
    const res = await fetch(`${POKEMON_API_BASE_URL}pokemon/${id}`);
    const pokeData = await res.json()
    const {name, types, forms} = pokeData;
    return name + types + forms
};

export function getTypeById(id) {
    return id + "test"
};

