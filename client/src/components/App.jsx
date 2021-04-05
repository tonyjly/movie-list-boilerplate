import React from 'react';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: [
        {title: 'Mean Girls', watched: true},
        {title: 'Hackers'},
        {title: 'The Grey', watched: true},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ],
      add: '',
      query: ''
    };

    this.addMovieText = this.addMovieText.bind(this);
    this.addMovieClick = this.addMovieClick.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  };

  // Add movie: state
  addMovieText(event) {
    this.setState({add: event.target.value}, () => {console.log('add', this.state.add)});
  };

  // Add movie: click
  addMovieClick(event) {
    event.preventDefault();
    const emptyQuery = this.state.add === '';

    if (!emptyQuery) {
      const newMovie = {};
      newMovie.title = this.state.add;
      this.setState(() => {
        return this.state.movies.push(newMovie)
      });
    };
  };

  // Search/query text
  searchMovie(event) {
    this.setState({query: event.target.value}, () => {console.log('query', this.state.query)});
  };

  // Toggle Watched state
  toggleWatched(event) {
    event.preventDefault();

  };

  render() {
    const searching = this.state.query !== '';
    const filteredMovies = this.state.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.state.query.toLocaleLowerCase()))

    const results = !searching ? this.state.movies : filteredMovies

    return (
      <div>
        <span class="title"><a href="/"><h2>MovieList</h2></a></span>
        <SearchMovie add={this.addMovieText} addClick={this.addMovieClick} search={this.searchMovie} /><br/>
        <MovieList list={results} />
      </div>
    );
  };
};

export default App;