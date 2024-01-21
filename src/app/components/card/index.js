import React from 'react'
import './index.css'

const Card = (props) => {
    return (
    <div id='card' className='flex flex-wrap'>
        <div className='pokemon'>
            <img
            src="https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png"
            alt="Bulbasaur"
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