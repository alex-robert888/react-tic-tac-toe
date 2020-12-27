
import React, { useState } from 'react';
import './Square.scss';

const Square = () => {
    const [value, setValue] = useState('-');

    return (
        <button className='square' onClick={() => setValue('X')}>
            {value}
        </button>
        
    );
}

export default Square;