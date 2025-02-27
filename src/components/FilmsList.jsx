import { useContext } from "react";
import GlobalContext from '../contexts/GlobalContext'
// import componente Card nel listato
import FilmCard from "./FilmCard";




const FilmsList = () => {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { film } = useContext(GlobalContext);

    return (
        <>

            {
                film.map((movie) => (
                    <FilmCard key={movie.id} movie={movie} />
                ))


            }
        </>
    )

}

export default FilmsList