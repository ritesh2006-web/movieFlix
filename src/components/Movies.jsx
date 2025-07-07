export default function Movies({ movies }) {
    if (!movies.length) return null

    return (
        <div className="movies-container">
           
            <ul className="movies-list">
                {movies.map(movie => (
                    <li className="movie-card" key={movie.imdbID}>
                        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
                        <div className="movie-info">
                            <span className="movie-title">{movie.Title}</span>
                            <span className="movie-year">({movie.Year})</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}