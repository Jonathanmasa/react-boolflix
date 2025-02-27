const fallbackImage = "https://via.placeholder.com/300x750?text=No+Image";

function FilmCard(props) {
  const { movie } = props;
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : fallbackImage;

  return (
    <div className="film-card">
      <img src={imageUrl} alt={movie.title} />
      <h2>{movie.title || "Titolo non disponibile"}</h2>
      <h4>Titolo Originale: {movie.original_title || "Non disponibile"}</h4>
      <p>Lingua: {movie.original_language ? movie.original_language.toUpperCase() : "Lingua non disponibile"}</p>
      <p>Voto: {movie.vote_average ? movie.vote_average : "Voto non disponibile"}</p>
    </div>
  );
}

export default FilmCard;