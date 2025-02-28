import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const fallbackImage = "https://via.placeholder.com/300x750?text=No+Image";

const languageFlagMap = {
  en: "us",
  es: "es",
  fr: "fr",
  it: "it",
};

const getFlagUrl = (languageCode) => {
  const flagCode = languageFlagMap[languageCode] || languageCode;
  return `https://flagcdn.com/w20/${flagCode.toLowerCase()}.png`;
};

function FilmCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : fallbackImage;

  const languageCode = movie.original_language
    ? movie.original_language.toLowerCase()
    : null;
  const flagUrl = languageCode ? getFlagUrl(languageCode) : null;

  const getStars = (vote) => {
    const roundedVote = Math.ceil(vote / 2);
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{ color: i < roundedVote ? "#ffd700" : "#d3d3d3" }}
      />
    ));
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 mb-4">
      <div className="card film-card h-100 position-relative overflow-hidden p-2 border-dark" style={{ border: '2px solid black' }}>
        {/* Immagine con effetto hover */}
        <img
          src={imageUrl}
          alt={movie.title || movie.name}
          className="card-img-top film-image"
        />
        
        {/* Overlay con dettagli visibili solo in hover */}
        <div className="card-body text-white bg-secondary overlay p-2">
          <h5 className="card-title" style={{ fontSize: '14px' }}>{movie.title || movie.name || "Titolo non disponibile"}</h5>
          <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: '12px' }}>
            {movie.original_title || movie.original_name || "Non disponibile"}
          </h6>
          <div className="language-info mb-2">
            <p className="mb-1" style={{ fontSize: '12px' }}>
              Lingua: {languageCode ? (
                <span>
                  <img src={flagUrl} alt={`Bandiera ${movie.original_language}`} />
                  {movie.original_language.toUpperCase()}
                </span>
              ) : "Lingua non disponibile"}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0" style={{ fontSize: '12px' }}>Voto: {movie.vote_average || "Voto non disponibile"}</p>
            <div className="stars">
              {movie.vote_average ? getStars(movie.vote_average) : null}
            </div>
          </div>
          <p className="card-text mt-2" style={{ fontSize: '12px', overflow: 'auto', maxHeight: '100px' }}>
            {movie.overview || "Descrizione non disponibile"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;