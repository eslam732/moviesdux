import './App.css';
import './styles.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { MoviesGrid } from './components/MoviesGrid';
import WatchList from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";


function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const toggleWatchList = (movieId) => {
    setWatchList(prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }
  useEffect(() => {
    fetch('movies.json')
      .then(response => response.json())
      .then(data => setMovies(data))
  }, []);
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/watchlist'>WatchList</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route>
              <Route path='/' element={<MoviesGrid
                movies={movies} watchList={watchList} toggleWatchList={toggleWatchList} />}></Route>
              <Route path='/watchlist' element={<WatchList
                movies={movies} watchList={watchList} toggleWatchList={toggleWatchList} />}></Route>
            </Route>
          </Routes>
        </Router>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
