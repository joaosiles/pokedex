import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';

const FilterLeft = ({filter, updateArrayTypeFilter}) => {
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [showFavs, setShowFavs] = useState(false);

  const handleCheckboxChange = (type) => {
    setCheckedTypes((prevTypes) => {
      if (prevTypes.includes(type)) {
        const updatedTypesFiltered = prevTypes.filter((checkedType) => checkedType !== type);        
        updateArrayTypeFilter(updatedTypesFiltered)
        return updatedTypesFiltered;
      } 
        const updatedTypesFiltered = [...prevTypes, type];        
        updateArrayTypeFilter(updatedTypesFiltered)
        return updatedTypesFiltered;
      
    });
  };

  const handleFavsChange = () => {
    setShowFavs(!showFavs);
  };

  const types = [
    'Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting',
    'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost',
    'Dark', 'Steel', 'Dragon', 'Fairy'
  ];

  const red = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: "#E1E1E1"
          },
          colorPrimary: {
            "&.Mui-checked": {
              color: "#E2350D"
            }
          },
          track: {
            opacity: 0.2,
            backgroundColor: "F1F1F1",
            ".Mui-checked.Mui-checked + &": {
              opacity: 0.7,
              backgroundColor: "#f7dad4"
            }
          }
        }
      }
    }
  });

  return (
    <div className='flex flex-wrap space-x-2 h-20'>
      <div className='w-full'>
        Filtrar por tipo:
      </div>
      {types.map((type, index) => (
        <div
          className={`checkbox-container my-1 ${checkedTypes.includes(type) ? 'checked' : ''}`}          
        >          
            <label key={index} className={`${checkedTypes.includes(type) ? 'checked' : ''}`}>
              {type}
              <input
                type="checkbox"
                id={`checktype-${index}`}
                checked={checkedTypes.includes(type)}
                onChange={() => handleCheckboxChange(type)}
              />
            </label>        
        </div>
        ))}
      <div className='w-full mt-8'>
        Filtrar Favoritos
      </div>
      <div className='w-full justify-start'>
        <ThemeProvider theme={red}>
          <Switch checked={showFavs} onChange={handleFavsChange} />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default FilterLeft;
