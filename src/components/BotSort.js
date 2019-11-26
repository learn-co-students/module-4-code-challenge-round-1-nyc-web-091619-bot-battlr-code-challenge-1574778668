import React from 'react';

export const BotSort = props => {
    return (
      <form onSubmit={event => props.submitHandler(event)}>
        <select>
          <option selected disabled>Attribute</option>
          <option value='health'>Health</option>
          <option value='damage'>Damage</option>
          <option value='armor'>Armor</option>
        </select>
        
        <select>
          <option selected disabled>Sort Order</option>
          <option value={1}>ascending</option>
          <option value={-1}>descending</option>
        </select>

        <input type='submit'></input>
      </form>
    );
  
}

export default BotSort;
