import React from "react";
import MovieSection from "./components/MovieSection";

const Movies = () => {
  return (
    <div>
      <MovieSection type="popular" />
      <MovieSection type="upcoming" />
      <MovieSection type="top_rated" />
      <MovieSection type="now_playing" />
    </div>
  );
};

export default Movies;
