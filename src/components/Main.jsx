import React from "react"
import Movies from "./Movies"



export default function Main() {
    const [movieList, setMovieList] = React.useState([])

    async function getMovie(formData) {
        const search = formData.get("movieName")
        if (!search) return
        const apiKey = import.meta.env.VITE_OMDB_API_KEY
        console.log("VITE_OMDB_API_KEY:", apiKey)
        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}`)
        const data = await res.json()
        setMovieList(data.Search || [])
    }

    return (
        <section className="main-section">
            <header className="main-header">
                <span className="netflix-logo">Search Movies</span>
                
            </header>
            <form className="search-form" action={getMovie}>
                <input className="search-input" type="text" placeholder="e.g. Interstellar" name="movieName" />
                <button className="search-btn">Search</button>
            </form>
           { movieList.length>0 && <h2 className="results-title">Results:</h2>}
            <Movies movies={movieList} />
        </section>
    )
}