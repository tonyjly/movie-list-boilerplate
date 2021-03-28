import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';

// don't need to set filter function in movielist
      // display depends on if there is a search query
        // if no search query typed into box
          // display full movie list
        // if search query is typed into box
          // display filtered movie list

// const App = (props) => (
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ],

      query: '' // searchText
    };

    this.display = (this.state.query === '')
    ? this.state.movies
    : this.state.movies.filter(title =>
      title.toLowerCase().includes(query.toLocaleLowerCase())
    );

    this.searchMovie = this.searchMovie.bind(this);
    this.searchText = this.searchText.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  };

  searchMovie(searchText) {
    this.setState({
      query: searchText
    }, ()=>{console.log('searchText:', this.state.query)});
  };

  searchText() {
    this.setState({
      query: event.target.value
    }, () => {console.log('query', this.state.query)});
  };

  clickHandler(event) {
    event.preventDefault();
    this.searchMovie(this.state.query);
  };

  searchMovies(event) {
    this.searchText(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <hr class="solid" />
        <br/>
        <form>
          <input type="text" placeholder="Search..." value={this.state.query || ''} onChange={this.searchMovies} />
          <button type="submit" value="Go!" onClick={this.clickHandler}>Go!</button>
        </form>
        <br/>
        <MovieList movies={this.display} query={this.state.query} />
      </div>
    )
  }
};

export default App;

// <input type="text" placeholder="Search..." value={this.state.query || ''} onChange={(event) => this.setState({query: event.target.value})} />



// filter example: https://stackoverflow.com/questions/47784442/react-redux-search-filter-update-app-state-as-you-type

// class Search extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       animals: [
//         {animal: 'Heron, giant'},
//         {animal: 'Lizard'},
//         {animal: 'Blesbok'},
//         {animal: 'Ibex'},
//         {animal: 'Pigeon, wood'},
//         {animal: 'Ground monitor'}
//       ],
//       query: false
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <input placeholder="search" value={this.state.query || ''} onChange={(event) => this.setState({query: event.target.value})}/>
//         </div>

//         <br/>

//         <div>
//           <div>ANIMALS</div>
//           {
//             this.state.animals.filter(
//               (animal) => _.toLower(animal.animal).includes(_.toLower(this.state.query || ''))
//             )
//               .map((animal) => <div>{animal.animal}</div>)
//           }
//         </div>
//       </div>
//     )
//   }
// }