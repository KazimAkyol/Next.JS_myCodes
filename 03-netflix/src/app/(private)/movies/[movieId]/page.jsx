import React from "react";
import { getirVideoKey } from "@/helpers/movieFunctions";
const MovieDetail = async ({ params: { movieId } }) => {
  //* yol ile gelen id yi üstte yakaladık, dosyanın adı ile buradaki yakalanan isim aynı olmalı
  // console.log(movieId);
  const videoKey = await getirVideoKey(movieId);

  return (
    <div>
      <div className="w-10/12 lg:w-full mx-auto">
        <div
          className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
          style={{ paddingTop: "50%" }}
        >
          <iframe
            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
