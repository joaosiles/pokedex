import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FilterTop = (props) => {
    return (
    <div id='searchBox' className='flex justify-between items-center my-5 py-3'>
        <input
            type="text"
            placeholder="Pesquisar por nome ou número..."        
        />
        <FontAwesomeIcon className='icon' icon={faSearch} />                
    </div>
    );
   };
   
   export default FilterTop;