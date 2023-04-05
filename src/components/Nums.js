/* eslint-disable react/prop-types */

import React from 'react';
import './styles/Nums.css';

export default function Nums ({ setResult }) {
  const handleClick = (value) => {
    setResult(result => [...result, value]);
  };
  const numbers = Array.from({ length: 10 }, (_, i) => i).map(
    number => {
      return <button value={number} onClick={(e) => handleClick(e.target.value)} draggable='true'
      key={number} className='buttonNums'>
      {number}
      </button>
    }
  );
  const reversed = [...numbers];
  reversed.reverse();
  return (
      <div className='numStyle'>
        {reversed}
      </div>
  );
}
