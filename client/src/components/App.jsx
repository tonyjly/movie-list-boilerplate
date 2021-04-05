import React from 'react';
import MovieList from './MovieList.jsx';
// import MovieListItem from './MovieListItem.jsx';
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

    // bind functions
    this.searchMovie = this.searchMovie.bind(this);
  }

  searchMovie(event) {
    this.setState({
      query: event.target.value
    }, () => {
      console.log('query:', this.state.query);
    });
  };

  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <SearchMovie search={this.searchMovie} />
        <MovieList list={this.state.movies} />
      </div>
    )
  }
};

export default App;