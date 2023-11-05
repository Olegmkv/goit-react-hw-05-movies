import { fetchCredits } from "api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const [cast, setCast] = useState([])
    const params = useParams();

    useEffect(() => {
        if (!params.movieId) {
            return;
        }
        async function getMovie() {
            try {
                const movieFind = await fetchCredits(params.movieId);
                setCast(movieFind.cast)
            } catch (error) { }
        }
        getMovie();
    }, [params.movieId])

    return (
        <ul>
            {cast.map(item =>
                <li key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${item.profile_path ?? '/2oPeMkoUKWPUtYlC0TtAYpCgFOt.jpg'}`} alt={item.name} width="100" />
                    <h4>{item.name}</h4>
                    <p>{item.character}</p>
                </li>
            )}
        </ul>
    )
}

export default Cast;