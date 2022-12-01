import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      <h1>{movie.title}</h1>
      <div>
        <img src={movie.medium_cover_image} />
        <span>{movie.rating}</span>
        <span>{movie.runtime}</span>
        <span>{movie.like_count}</span>
        <p>{movie.description_full}</p>
      </div>
    </div>
  );
}

export default Detail;
