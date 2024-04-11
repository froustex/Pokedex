const NavBar = ({pokemonList, pokemonIndex, setPokemonIndex})  => {
  console.log(pokemonIndex)

  function pikachu () {
    if (pokemonIndex == 3) {
       alert("Pika Pikachu!!!")
  }}
  pikachu()

  return (
    <>
    {pokemonList.map((pokemon, index) => (
      <button onClick={()=>setPokemonIndex(index)} key={index}>{pokemon.name} </button>
      
))}
    </>
  )
};

export default NavBar;
