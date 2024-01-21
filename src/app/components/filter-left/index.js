"use client"
import React, { useState } from 'react'
import Switch from '@mui/material/Switch'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'

const FilterLeft = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [showFavs, setShowFavs] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleFavsChange = () => {
        setShowFavs(!isChecked);
    };

    const red =  createTheme({
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
        <div className='w-full'>
            <div className='w-full'>
                Filtrar por tipo:    
            </div>
            <div className={`flex flex-wrap checkbox-container mt-2 ${isChecked ? 'checked' : ''}`}>
                <label>
                    Checkbox
                    <input
                        type="checkbox"
                        id="checktype"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>
            <div className='w-full'>
                Filtrar Favoritos
            </div>
            <div className='w-full justify-start'>
                <ThemeProvider theme={red}>
                    <Switch/>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default FilterLeft;