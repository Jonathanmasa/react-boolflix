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
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 mb-4">
      <div className="card film-card h-100 position-relative overflow-hidden">
        {/* Immagine  */}
        <img
          src={imageUrl}
          alt={movie.title || movie.name}
          className="card-img-top"
          style={{
            
            transition: 'opacity 0.3s ease', 
            width: '100%',
            height: 'auto', 
            objectFit: 'cover',
          }}
        />

        {/* Dettagli del film sotto l'immagine */}
        <div
          className="card-body text-white bg-secondary"
          
        >
          <h5 className="card-title">{movie.title || movie.name || "Titolo non disponibile"}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {movie.original_title || movie.original_name || "Non disponibile"}
          </h6>

          <div className="language-info mb-2">
            <p className="mb-1">
              Lingua:{" "}
              {languageCode ? (
                <span>
                  <img
                    src={flagUrl}
                    alt={`Bandiera ${movie.original_language}`}
                  
                  />
                  {movie.original_language.toUpperCase()}
                </span>
              ) : (
                "Lingua non disponibile"
              )}
            </p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">
              Voto: {movie.vote_average ? movie.vote_average : "Voto non disponibile"}
            </p>
            <div className="stars">
              {movie.vote_average ? getStars(movie.vote_average) : "Voto non disponibile"}
            </div>
          </div>

          <p className="card-text mt-2" style={{ fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', height: '60px' }}>
            {movie.overview ? movie.overview : "Descrizione non disponibile"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;