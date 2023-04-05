/* eslint-disable react/prop-types */

import React from 'react';
import './styles/Screen.css';

export default function Screen ({ result, setResult }) {
  const output = result.join('');
  let arr;
  const handleClick = () => {
    if (output.includes('.')) {
      arr = output.match(/\d+.\d+|\d+|[^0-9]/g);
    } else {
      arr = output.match(/\d+|[^0-9]|\d+/g);
    }
    // eslint-disable-next-line no-unused-vars, prefer-const
    let index = arr.indexOf('%');
    // eslint-disable-next-line no-eval
    return setResult([eval(output.replaceAll('%', '/100*arr[index-3]'))]);
  }
  const deleteLast = () => {
    return setResult(result.slice(0, -1));
  }
  return (
    <div>
    <input type='text' placeholder='Enter value' value={output} className='screen' disabled/>
    <button className='buttonNums' onClick={handleClick} draggable='true'>=</button>
    <button className='buttonNums' draggable='true' value='C' onClick={deleteLast}>C</button>
    </div>
  );
}
