import axios from 'axios';
import { useState, useEffect } from 'react';


// const url = 'https://pokeapi.co/api/v2/pokemon';
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const headers = {
  'Cache-Control': 'no-cache'
};


const ClientSide = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async() => {
     const response = await axios.get(url);
    //  const response = await axios.get(url, { headers });   // disable cache

    // console.log(response)
    // const { results } = response.data;
    // setPokemons(results);

    /*
    const promises = [];
    response.data.results.forEach(result => {
      // console.log(result)
      // console.log(result.url)
      promises.push(axios.get(result.url));
    })
    */
    
    // map returns a new array, but forEach doesn't
    const promises = response.data.results.map(result => {
      return axios.get(result.url);
      // return axios.get(result.url, { headers });   // disable cache
    })

    const responses = await Promise.all(promises);
    // console.log(responses);
    // setPokemons(responses);

    const pokeData = responses.map(res => {
      return {
        name: res.data.name,
        imgUrl: res.data.sprites.front_default
      }
    });
    console.log(pokeData);
    setPokemons(pokeData);
    };

    fetchPokemon();
  },[]);



  return (
    <>
      {pokemons && pokemons.map((pokemon, index) => (
        <div key={index}>
          {pokemon.name}
          <img src={pokemon.imgUrl} alt={pokemon.name}/>
          {/* <Image 
            src={pokemon.data.sprites.back_default} 
            alt={pokemon.data.species.name}
            width={96}
            height={96}
          /> */}
          <hr />
        </div>
      ))}
    </>
  )
}

export default ClientSide
