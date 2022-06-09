import React from "react";


const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) =>{ //brenda thonjzave kalojme propse por kur e fusim ne kllapa nuk kemi nevoje ta perseritim
    return(
        <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
    );
}

export default MovieCard;