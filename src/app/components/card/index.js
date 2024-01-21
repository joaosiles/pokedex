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
                <div className='number mt-2'>Nº{pokemonData ? pokemonData.pokemonData.national_number : ''}</div>
                <div className='name'>{pokemonData ? pokemonData.pokemonData.name : ''}</div>
                <div className='type'>
                <span className='card-type flex flex-nowrap'>
                  {pokemonData.pokemonData.type.map((type, typeIndex) => (
                    <div key={typeIndex} className={`space-type m-2 ${type}`}>
                      {type}
                    </div>
                  ))}
                </span>
              </div>
            </div>    
        </div>
    </div>        
  );
};
  
export default Card;