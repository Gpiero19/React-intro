import React from 'react'
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setsearchValue] = React.useState('');
    console.log('Los usuarios quieren buscar ' + searchValue);
    
    return (
        <input placeholder="cortar cebolla" 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
          setsearchValue(event.target.value)
        }}/>
    );
  };

export { TodoSearch };