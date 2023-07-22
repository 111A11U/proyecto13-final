import axios from "axios";

const todosPersonajes = async (state, pagina) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`)
    state(peticion.data.results)
}

const unicoPersonaje = async (id, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
}

export {
    todosPersonajes,
    unicoPersonaje
}