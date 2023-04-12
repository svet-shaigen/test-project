import {getPokeApi,getPokemonName} from "./js/getPokeApi.js"
import renderHtml from "./js/renderHtml.js";

let name = ''

const showPokemons = document.querySelector('.show-pokemons');
showPokemons.addEventListener('click', onShowPokemons);

function onShowPokemons() {
    getPokeApi()
    .then(dataPokemons => {
        let pokemon = dataPokemons.data.results
    })
    .catch(error => {
        console.log(error)
    }
    )
}



getPokemonName(name)
.then(dataPokemon => {
    //  console.log(dataPokemon)
})
.catch(error => {
    // console.log(error)
}
)