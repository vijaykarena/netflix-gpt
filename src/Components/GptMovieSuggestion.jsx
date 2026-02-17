import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) {
    console.log("movie not found!");
    return null;
  }

  return (
    <div className="p-4 m-4 bg-black/90 text-white">
      <div>
        {movieNames?.map((movieName, idx) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[idx]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
