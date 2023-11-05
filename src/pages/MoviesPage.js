import { fetchFind} from "api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { MoviesFilter } from "components/MoviesFilter/MoviesFilter";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";


export default function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const initQuery = searchParams.get("query")??'' 
  
  const [filter, setFilter] = useState(initQuery);
  const [movies, setMovies] = useState(null);

  
  useEffect(() => {
    async function getMovies() {
      try {
        if (filter === '') {
          return
        }
        const moviesFind = await fetchFind(filter);
        setMovies(moviesFind.results)
      }catch (error){}
    }
    getMovies();  
  }, [filter])


  
  const handleFilterMovie = (evt) => {
    evt.preventDefault()
    const filterMovie = evt.target.findMovie.value
    if (!filterMovie) {
      return
    }
    setFilter(filterMovie);
    setSearchParams({ query: filterMovie})
  };  
    return (
<>
 <MoviesFilter handleFilterMovie={handleFilterMovie}  />          
        {/* {movies && <MoviesList movies={movies} />} */}
        {movies&&<MoviesList movies={movies} state={{ from: `${location.pathname}${location.search}`}} />}
</>
      )
};
    
