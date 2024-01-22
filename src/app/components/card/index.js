import React, { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Card = (pokemonData) => {
  const [fav, setFav] = useState(false);

  const favChange = () => {
    let heart = fav
    setFav(!heart)
    console.log(pokemonData.pokemonData)
    pokemonData.pokemonData.fav = !fav
  }

return (
    <div id='card' className='flex flex-wrap'>
    <div className='pokemon icon-container'> 
          <FontAwesomeIcon
            className={`icon ${fav ? 'icon-fav' : ''}`}
            icon={faHeart}
            onClick={favChange}            
          />  
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