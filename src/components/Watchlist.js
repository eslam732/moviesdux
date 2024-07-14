import React from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function WatchList({ movies, watchList, toggleWatchList }) {

    return (
        <div>
            <h1 className="title">Your Watch List</h1>
            <div className="watchlist">
                {
                    watchList.map(id=>{
                        const movie = movies.find(movie => movie.id === id);
                        return <MovieCard movie={movie} isWatchListed={true} toggleWatchList={toggleWatchList}></MovieCard>
                    })
                }
            </div>
        </div>
    );
}