import React from 'react';

const MovieListItem = (props) => (
  <li>
    <span>{props.movie.title}  </span>
    <span class="right"><button class="watched">Watched</button></span>
  </li>
);

export default MovieListItem;