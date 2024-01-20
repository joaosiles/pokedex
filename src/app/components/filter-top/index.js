import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FilterTop = (props) => {
    return (
    <div className='flex flex-nowrap w-full'>
        <div id='searchBox' className='flex justify-between items-center my-5 py-3'>
            <input
                type="text"
                placeholder="Pesquisar por nome ou número..."
                id='search'    
            />
            <FontAwesomeIcon className='icon' icon={faSearch} />                
        </div>
        <div id='selectBox' className='flex flex-row justify-end w-full my-2 py-3'>
            <label className='my-2 mr-3'>Ordenar por</label>
                <select id='selectTop'>
                <option value="highNumber">Maior número</option>
                <option value="lowerNumber">Menor número</option>                
            </select>
        </div>
    </div>        
    );
   };
   
   export default FilterTop;