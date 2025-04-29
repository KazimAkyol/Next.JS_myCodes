//* movie'lerle ilgili verileri cektigimiz dosya:
const API_KEY = process.env.TMDB_KEY;

//* isetedigimiz her türlü filmi(poplar, upcoming, top_rated, now_playing) fetiren function:
export const getirMovies = async (type) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
  );

  const { results } = await res.json();

  return results;
};

//* aldigi filmin id'sine göre, o filmin videosunu browser'Da görüntüleyebilmek icin, YouTube'un istedigi key'i getiren function, bu key iframe'e gömülecek:
export const getirVideoKey = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  );

  const data = await res.json();

  //   console.log(data.results[0].key);

  return data.results[0].key;
};
