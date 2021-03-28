import React from 'react';

const MovieListItem = (props) => (
  <tr>
    <td>{props.movie.title}</td>
  </tr>
)

export default MovieListItem;

// Regular <Table />
// <table>
//   <tr>
//     <div>
//       <td>Hello</td>
//       <td>World</td>
//     </div>
//   </tr>
// </table>