"use client";
import React, { useState } from 'react';
import './index.css';

const FilterLeft = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

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
        </div>
    );
};

export default FilterLeft;