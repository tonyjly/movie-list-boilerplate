import React from 'react';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ],
      query: ''
    };

    this.searchMovie = this.searchMovie.bind(this);
  };

  // Search/query text
  searchMovie(event) {
    this.setState({query: event.target.value});
  };

  render() {
    const searching = this.state.query !== '';
    const filteredMovies = this.state.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.state.query.toLocaleLowerCase()))

    const results = !searching ? this.state.movies : filteredMovies

    return (
      <div>
        <span class="title"><a href="/"><h2>MovieList</h2></a></span>
        <SearchMovie search={this.searchMovie} /><br/>
        <MovieList list={results} />
      </div>
    );
  };
};

export default App;