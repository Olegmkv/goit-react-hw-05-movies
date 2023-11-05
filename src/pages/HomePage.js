import { fetchTrending } from "api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function HomePage () {
  const [trend, setTrend] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    async function getTrending() {
      try {
        const trending = await fetchTrending();
        setTrend(trending.results)
      }catch (error){}
    }
    getTrending();  
  }, [])
  
  return (
    <>
      <MoviesList movies={trend} state={{ from: location }} />
    </>
  )
};
  