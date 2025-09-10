import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); // YouTube video ID

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close the trailer if already open
    } else {
      // movieTrailer returns YouTube video ID when { id: true } is passed
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "", { id: true })
        .then((videoId) => {
          if (videoId) setTrailerUrl(videoId);
        })
        .catch((error) => console.log("Trailer not found:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name || movie.title}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>

      {/* YouTube player */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
