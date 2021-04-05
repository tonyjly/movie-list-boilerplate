import React from 'react';

const MovieListItem = (props) => {

  const watched = props.movie.watched;
  let toggleWatched;

  if (watched) {
    toggleWatched = <button class="watched">Watched</button>;
  } else {
    toggleWatched = <button class="unwatched">To Watch</button>;
  }

  return (
    <li>
      <span>{props.movie.title}  </span>
      <span class="right">{toggleWatched}</span>
    </li>
  );
};

export default MovieListItem;