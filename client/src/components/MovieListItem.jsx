import React from 'react';

const MovieListItem = (props) => (
  <li>
    <span>{props.movie.title}</span>
  </li>
)

export default MovieListItem;