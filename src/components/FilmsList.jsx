import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import FilmCard from "./FilmCard";

const FilmsList = () => {
  // Destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
  const { film } = useContext(GlobalContext);

  return (
    <div>
      {film.length > 0 ? (
        film.map((movie) => <FilmCard key={movie.id} movie={movie} />)
      ) : (
        <p>Nessun film trovato</p>
      )}
    </div>
  );
};

export default FilmsList;