import PropTypes from "prop-types";
function PokemonCard({pokemon}) {

    return (
    <figure>
        {pokemon.imgSrc ?
        <img src={pokemon.imgSrc} alt="image de pokemon" /> :
        <p>???</p>
        }      
    <figcaption>{pokemon.name}</figcaption>   
    </figure> 
    )
}

PokemonCard.propTypes = {
  pokemon : PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  })
}

export default PokemonCard;