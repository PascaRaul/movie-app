import React from "react";

function Favorites(props) {
  return (
    <>
      {props.favorites.map((fav, i) => (
        <div className="container__favorites" key={i}>
          <img className="img_fav" src={fav.Poster} alt="favorite movie"></img>
          <button onClick={() => props.removeFavorite(fav)} type="button">
            X
          </button>
        </div>
      ))}
    </>
  );
}

export default Favorites;
