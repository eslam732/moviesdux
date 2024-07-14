import { useState } from "react";
import '../styles.css';
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";


export function MoviesGrid({ movies, watchList, toggleWatchList }) {

    const [searchWord, setSearchWord] = useState('');
    const [genre, setGenre] = useState('AllGenrs');
    const [rating, setrating] = useState('All');
    const ratingArray = ['All', 'Good', 'Ok', 'Bad'];
    const genresArray = ['AllGenrs', 'Action', 'Drama', 'Horror'];

    const handleGenre = (e) => {
        setGenre(e.target.value);
    }
    const handleRating = (e) => {
        console.log(e.target.value);
        setrating(e.target.value);
    }
    const handleSearchWord = (e) => {
        setSearchWord(e.target.value);
    }

    const matchesGenre = (movie, genre) => {
        return genre === genresArray[0] || movie.genre.toLowerCase() === genre.toLowerCase();
    }
    const matchesSearchWord = (movie, searchWord) => {
        return movie.title.toLowerCase().includes(searchWord.toLowerCase())
    }
    const matchesRating = (movie, rating) => {
        switch (rating) {
            case "All":
                return true
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating >= 5 && movie.rating < 8;
            case "Bad":
                return movie.rating < 5;

            default:
                return false;
        }
    }

    const filteredMovies = movies.filter((movie) =>
        matchesGenre(movie, genre) && matchesRating(movie, rating) && matchesSearchWord(movie, searchWord)
    );

    return (
        <div>
            <SearchBar searchWord={searchWord} handleSearchWord={handleSearchWord}></SearchBar>
            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenre}>
                        {genresArray.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Rating</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRating}>
                        {ratingArray.map((rate, index) => (
                            <option key={index} value={rate}>{rate}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="movies-grid">
                {
                    filteredMovies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} toggleWatchList={toggleWatchList} isWatchListed={watchList.includes(movie.id)}></MovieCard>
                    ))
                }
            </div>
        </div>

    );
}