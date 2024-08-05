import React from "react";
import useGenre from "../Hooks/usedGenres";

const GenreList = () => {
  const { Genre } = useGenre();
  return (
    <ul>
      {Genre.map((Genre) => (
        <li key={Genre.id}>{Genre.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;
