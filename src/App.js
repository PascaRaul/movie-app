import { useEffect, useState } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const searchHandler = function (e) {
    setSearch(e.target.value);
  };

  const favoritesTitles = favorites.map((f) => f.Title);

  const getMovieRequest = async function (searchValue) {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=bbee68ec`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (!responseJson.Search) return;
    const newArr = responseJson.Search.map((i) => ({
      ...i,
      isFavorite: favoritesTitles.indexOf(i.Title) > -1 ? true : false,
    }));

    setMovies(newArr);
  };

  useEffect(() => {
    getMovieRequest(search);
  }, [search]);

  const favoriteHandler = function (movie) {
    for (let m = 0; m < favorites.length; m++) {
      if (favorites[m].Title === movie.Title) {
        return;
      }
    }

    const newArr = movies.map((m) => {
      if (m.Title === movie.Title) {
        m.isFavorite = true;
      }
      return m;
    });

    setMovies(newArr);
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavoriteHandler = function (fav) {
    const newFavList = favorites.filter((f) => f.Title !== fav.Title);

    const newArr = movies.map((m) => {
      if (m.Title === fav.Title) {
        m.isFavorite = false;
      }
      return m;
    });

    setMovies(newArr);
    setFavorites(newFavList);
  };

  return (
    <div>
      <h1 className="movies__title">Movies</h1>
      <SearchBar search={search} setSearch={searchHandler} />
      <div className="container__mov">
        <MovieList movies={movies} favoriteMovie={favoriteHandler} />
      </div>
      <h1 className="favorites__title">Favorites</h1>
      <div className="container__fav">
        <Favorites
          favorites={favorites}
          removeFavorite={removeFavoriteHandler}
        />
      </div>
    </div>
  );
}

export default App;
