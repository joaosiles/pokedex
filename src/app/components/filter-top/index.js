import React, { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const FilterTop = ({ onFilter }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onFilter(inputValue);
    }
  };

  const filterText = () => {
    onFilter(inputValue);
  };

  return (
    <div className='flex flex-nowrap w-full'>
        <div id='searchBox' className='flex justify-between items-center my-5 py-3'>
          <input
            type="text"
            placeholder="Pesquisar por nome ou número..."
            id='search'
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <FontAwesomeIcon
            className='icon'
            icon={faSearch}
            onClick={filterText}
          />               
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