import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/';

 function getPokeApi() {
    const URL = `${BASE_URL}pokemon?limit=10&offset=0`
    return axios.get(URL)
    .then(response => {
        if(!response.status === 200)
            throw new Error(response.status)
         return response;
     })
 }

 function getPokemonName(name) {
    const URL_NAME = `${BASE_URL}pokemon/${name}`
    return axios.get(URL_NAME)
    .then(response => {
        if(!response.status === 200)
            throw new Error(response.status)
         return response;
     })

 }

 export {getPokeApi,getPokemonName}
 