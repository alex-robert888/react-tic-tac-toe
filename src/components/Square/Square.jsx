
import React, { useState } from 'react';
import './Square.scss';

const Square = ({value, onClickHandler}) => {
    return (
        <button className='square' onClick={() => onClickHandler() }>
            {value}
        </button>
        
    );
}

export default Square;