import {  fetchMovie} from "api";
import { Movie } from "components/Movie/Movie";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";


export default function MovieDetails() {

  const [movie, setMovie] = useState({});
  const params = useParams();
  const location = useLocation();
  const backLink = { from: location.state?.from ?? "/" };
  
  useEffect(() => {
    if (!params.movieId) {
      return;
    }
    async function getMovie() {
      try {
        const movieFind = await fetchMovie(params.movieId);
        setMovie(movieFind)
      }catch (error){}
    }
    getMovie();  
  }, [params.movieId])
    
return (
  <main>
    <Link to={location.state?.from ?? '/'}>Go back</Link>;
  <Movie movieObj={movie}  />          
  <p>Additional information</p>
    <ul>
      <li>
        <Link to="cast" state={backLink}>Cast</Link>
      </li>
      <li>
        <Link to="reviews" state={backLink}>Review</Link>
      </li>
    </ul>  
    <Outlet />
</main>
)
};
    
