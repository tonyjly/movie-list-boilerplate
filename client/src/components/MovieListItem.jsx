import React from 'react';

const MovieListItem = (props) => (
  <li>
    <span class="list">{props.movie.title}</span>
  </li>
);

export default MovieListItem;