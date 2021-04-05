import React from 'react';

const SearchMovie = (props) => (
  <form>
    <label><input type="text" name="add" class="addSearch" placeholder="Add movie title here" onChange={props.add}/></label>
    <button type="submit" class="btn" onClick={props.addClick}>Add</button>
    <br/><br/>
    <label><input type="text" name="search" class="addSearch" placeholder="Search..." onChange={props.search}/></label>
    <button type="submit" class="btn" onClick={(event)=>{event.preventDefault();}}>Go</button>
  </form>
);


export default SearchMovie;