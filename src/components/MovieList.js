import React from "react";
import { Heart } from "phosphor-react";

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, i) => (
        <div
          onClick={() => props.favoriteMovie(movie)}
          key={i}
          className="container__movies"
        >
          <Heart
            weight={movie.isFavorite ? "fill" : "light"}
            color="red"
            className="heart"
            size={32}
          />
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
}

export default MovieList;
