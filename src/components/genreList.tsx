import useGenre from "../Hooks/usedGenres";
import useData from "../Hooks/usedData";

const GenreList = () => {
  const { Data } = useGenre();
  return (
    <ul>
      {Data.map((Genre) => (
        <li key={Genre.id}>{Genre.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;
