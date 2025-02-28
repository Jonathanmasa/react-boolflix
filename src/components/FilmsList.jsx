import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import FilmCard from "./FilmCard";

const FilmsList = () => {
  const { films, series } = useContext(GlobalContext);

  return (
    <div className="container">
      {films.length > 0 || series.length > 0 ? (
        <>
          <h2>Film</h2>
          <div className="film-list">
            {films.map((movie) => (
              <FilmCard key={movie.id} movie={movie} />
            ))}
          </div>

          <h2>Serie TV</h2>
          <div className="film-list">
            {series.map((show) => (
              <FilmCard key={show.id} movie={show} />
            ))}
          </div>
        </>
      ) : (
        <p>Nessun risultato trovato.</p>
      )}
    </div>
  );
};

export default FilmsList;