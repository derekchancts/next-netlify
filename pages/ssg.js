import axios from 'axios';


const StaticSide = (props) => {
  // console.log(props);
  const { pokemons } = props;

  return (
    <>
      {pokemons && pokemons.map((pokemon, index) => (
        <div key={index}>
          {pokemon.name}
          <img src={pokemon.imgUrl} alt={pokemon.name}/>
          <hr />
        </div>
      ))}
    </>
  )
};


export const getStaticProps = async() => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  //const url = 'https://pokeapi.co/api/v2/pokemon';
  const response = await axios.get(url);
  // console.log(response)
  
  const promises = response.data.results.map(result => {
    return axios.get(result.url);
  });

  const responses = await Promise.all(promises);
  const pokeData = responses.map(res => {
    return {
      name: res.data.name,
      imgUrl: res.data.sprites.front_default
    }
  });
  // console.log(pokeData);

  return {
    props: {
      pokemons: pokeData
    }
  }
}


export default StaticSide
