import React from 'react';
import MovieList from './MovieList.jsx';
// import MovieListItem from './MovieListItem.jsx';

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
      ]
    };

    // bind functions
  }

  render() {
    return (
      <div>
        <h1>MovieList</h1>
          <MovieList list={this.state.movies} />
      </div>
    )
  }
};

export default App;