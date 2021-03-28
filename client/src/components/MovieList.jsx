import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => (
  <table>
    <tbody>

    {props.movies.map((item, i) => (
      <MovieListItem key={i} movie={item} /> // creates unique prop key
    ))}

    </tbody>
  </table>
);



export default MovieList;


// {props.movies.filter((movie) => movie.title.toLowerCase().includes(_.toLowerCase(props.query || ''))).map((item) => (
    //     <MovieListItem movies={item} />
    //   ))}


// {props.state.movies.filter((movie) => movie.toLower(movies.title).includes(_.toLower(props.state.query || ''))).map((item) => (
//   <MovieListItem movies={item} />
// ))}

// {
//   props.state.movies
//     .filter((animal) => _.toLower(animal.animal)
//     .includes(_.toLower(props.state.query || ''))
//   )
//     .map((animal) => <div>{animal.animal}</div>)
// }