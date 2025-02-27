
const FilmCard = (props) => {

    // destructuring dell'oggetto props
    const { movie } = props;

    

    return (
        <>

            <div className="card m-3">
                <div className="card-header">
                <h4 className="card-title">{movie.title}</h4>
                </div>

                <div className="card-body">
                    <p className="card-text">{movie.original_title}</p>
                    <p className="card-text">{movie.original_language}</p>
                    <p className="card-text">{movie.vote_average}</p>
                    
                </div>
            </div>

                

        </>
    )

}

export default FilmCard