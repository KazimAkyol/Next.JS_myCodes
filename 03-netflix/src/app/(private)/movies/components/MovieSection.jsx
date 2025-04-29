import React from "react";
import { getirMovies } from "@/helpers/movieFunctions";
import MovieCard from "./MovieCard";

const MovieSection = async ({ type }) => {
  const filmler = await getirMovies(type);

  return (
    <div className="mb-4">
      <p className="text-white  text-md lg:text-2xl font-semibold mb-4">
        {type.toUpperCase()}
      </p>

      <div className="grid grid-flow-col gap-2 overflow-x-scroll ">
        {filmler?.map((film) => (
          <MovieCard key={film.id} {...film} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
