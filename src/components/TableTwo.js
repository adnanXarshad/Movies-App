import React, { useState } from "react";
import Data from "./Data";
import "./Component.css";

const TableTwo = () => {
  const [movie, setMovie] = useState(Data);
  let [count, setCount] = useState(Data.length);

  const handleDelete = (title) => {
    console.log("I Deleted It");
    const temp = movie.filter((e) => e.title !== title);
    setMovie(temp);
    setCount((count = count - 1));
  };

  // const sortTitle = () => {
  //   console.log("Title Sort Clicked");
  //   const sortedData = [...movie].sort((a, b) => {
  //     if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
  //     if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
  //     return 0;
  //   });
  //   setMovie(sortedData);
  // };

let isAscending = true;
const sortTitle = () => {
  console.log("Sort Called");
 if(isAscending){ 
   const asc = [...movie].sort((a, b) => (a.title > b.title) ? 1 : -1);
     console.log("Ascending");
    setMovie(asc);
 }
 else{
   const dsc = [...movie].sort((a, b) => (a.title > b.title) ? -1 : 1);
     console.log("Descending");
    setMovie(dsc);
 }
 isAscending = !isAscending;
}

  return (
    <div>
      <h6>There are {count} movies in the list</h6>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col" onClick={sortTitle}>
              Title
            </th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {movie.map((item, index) => {
            return (
              <tr key={index} id="ROWS">
                <td>{item.title}</td>
                <td>{item.genre}</td>
                <td>{item.stock}</td>
                <td>{item.rate}</td>
                <td>
                  <button onClick={(e) => handleDelete(item.title)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TableTwo;
