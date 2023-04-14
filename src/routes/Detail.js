import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {/* <img src={movies.medium_cover_image} alt="title" />
      <h2>{movies.title}</h2>
      <p>{movies.description_intro}</p> */}
      detail
    </div>
  );
};

export default Detail;
