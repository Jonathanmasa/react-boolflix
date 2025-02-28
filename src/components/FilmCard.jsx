import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

const fallbackImage = "https://via.placeholder.com/300x750?text=No+Image";

// Mappa per lingue comuni
const languageFlagMap = {
  en: "us",
  es: "es",
  fr: "fr",
  it: "it",
};

// Funzione per ottenere l'URL della bandiera in base al codice lingua
const getFlagUrl = (languageCode) => {
  const flagCode = languageFlagMap[languageCode] || languageCode;
  return `https://flagcdn.com/w20/${flagCode.toLowerCase()}.png`;
};

function FilmCard(props) {
  const { movie } = props;
  
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : fallbackImage;

  const languageCode = movie.original_language
    ? movie.original_language.toLowerCase()
    : null;
  const flagUrl = languageCode ? getFlagUrl(languageCode) : null;

  // Funzione per calcolare il numero di stelle piene
  const getStars = (vote) => {
    // Voto arrotondato a 5
    const roundedVote = Math.ceil(vote / 2); 
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedVote) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: "#ffd700" }} />); 
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: "#d3d3d3" }} />); 
      }
    }
    return stars;
  };

  return (
    <div className="film-card">
      <img src={imageUrl} alt={movie.title || movie.name} />
      <h2>{movie.title || movie.name || "Titolo non disponibile"}</h2>
      <h4>
        Titolo Originale: {movie.original_title || movie.original_name || "Non disponibile"}
      </h4>
      <div className="language-info">
        <p>
          Lingua:{" "}
          {languageCode ? (
            <span>
              <img
                src={flagUrl}
                alt={`Bandiera ${movie.original_language}`}
                style={{ width: "20px", marginRight: "5px" }}
              />
              {movie.original_language.toUpperCase()}
            </span>
          ) : (
            "Lingua non disponibile"
          )}
        </p>
      </div>
      <div>
      <p>Voto: {movie.vote_average ? movie.vote_average : "Voto non disponibile"}</p>
      <div className="stars">
        {movie.vote_average ? getStars(movie.vote_average) : "Voto non disponibile"}
      </div>
      </div>
    </div>
  );
}

export default FilmCard;