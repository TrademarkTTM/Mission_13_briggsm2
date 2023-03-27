import { useState } from 'react';
import data from './MovieData.json';

const md = data.MovieData;

function MovieList() {
  const [MovieList] = useState(md);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {MovieList.map((m: any) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
