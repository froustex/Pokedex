const NavBar = ({pokemonList, pokemonIndex, setPokemonIndex})  => {

  return (
    <>
    {pokemonList.map((pokemon, index) => (
      <button onClick={()=>setPokemonIndex(index)} key={index}>{pokemon.name} </button>
))}
    </>
  )
};

export default NavBar;
