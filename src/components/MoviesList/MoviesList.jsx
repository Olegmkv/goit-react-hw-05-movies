import React from "react"
import { Link, useLocation } from "react-router-dom"

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    const backLink = { from: location.pathname + location.search }

    return (
        <ul>
            {movies.map(item =>
                <li key={item.id}>
                    <Link to={`/movies/${item.id}`} state={backLink} >
                        {item.title}
                    </Link>
                </li>
            )}
        </ul>
    )
}