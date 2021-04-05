import React from 'react';

const SearchMovie = (props) => (
  <form>
    <label><input type="text" name="search" class="search" placeholder="Search..." onChange={props.search}/></label>
    <button type="submit" class="btn" onClick={(event)=>{event.preventDefault();}}>Go!</button>
  </form>
);

export default SearchMovie;