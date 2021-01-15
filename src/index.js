import 'regenerator-runtime/runtime' //async/await with Parcel
import {App} from "./app/App";

const POKEMON_API_BASE_URL = process.env.POKEMON_API_BASE_URL || "https://pokeapi.co/api/v2";
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS ? process.env.QUIZ_MAX_TIME_SECONDS : 120;

window.onload = () => App({options: {pokemonApiBaseUrl: POKEMON_API_BASE_URL, quizMaxTime: QUIZ_MAX_TIME}})
