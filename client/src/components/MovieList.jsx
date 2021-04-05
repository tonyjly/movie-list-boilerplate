import React from 'react';
import MovieListItem from './MovieListItem.jsx'


const MovieList = (props) => (
  <div>

    {props.list.map((item, i) => (
      <MovieListItem key={i} movie={item} />
    ))}

  </div>
);

export default MovieList;