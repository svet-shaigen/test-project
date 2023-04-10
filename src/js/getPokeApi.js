import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/';

export default function getPokeApi() {
    const URL = `${BASE_URL}pokemon?limit=10&offset=0`
    return axios.get(URL)
    .then(response => {
         console.log(response)
     })
 }

 
 