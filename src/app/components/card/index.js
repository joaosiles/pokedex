import React from 'react'
import './index.css'

const Card = (pokemonData) => {

console.log(pokemonData.pokemonData)
  
return (
    <div id='card' className='flex flex-wrap'>
        <div className='pokemon'>
            <img
              src={pokemonData ? pokemonData.pokemonData.sprites.normal : ''}
              alt={pokemonData ? pokemonData.pokemonData.name : ''}
            />
            <div>
                <div className='number mt-2'>Nº 001</div>
                <div className='name'>Bulbasaur</div>
                <div className='type'>
                    <span className='card-type flex flex-nowrap'>
                        Grass
                    </span>
                </div>
            </div>    
        </div>
    </div>        
  );
};
  
export default Card;