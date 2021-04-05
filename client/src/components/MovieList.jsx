import React from 'react';
import MovieListItem from './MovieListItem.jsx'


const MovieList = (props) => (
  <ul>
    {props.list.map((item, i) => (
      <MovieListItem key={i} movie={item} />
    ))}
  </ul>
);

export default MovieList;