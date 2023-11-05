import React from "react"
import { StyledDiv } from "./Movie.styled"

export const Movie = ({ movieObj }) => {
    const { poster_path, title, release_date, vote_average, overview, genres } = movieObj

    return (
        <StyledDiv>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path ?? '/2oPeMkoUKWPUtYlC0TtAYpCgFOt.jpg'}`} alt={title} />
            </div>
            <div>
                <h2>{`${title} (${release_date})`}</h2>
                <p>User Score: {Math.round(vote_average * 10)}%</p>
                <h3>Overview: </h3>
                <p>{overview}</p>
                <h3>Genres:</h3>
                {genres && genres.map(genre =>
                    <span key={genre.id}>{genre.name},</span>)}
            </div>
        </StyledDiv>
    )
}