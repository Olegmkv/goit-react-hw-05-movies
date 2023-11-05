import React from "react";

export const MoviesFilter = ({ handleFilterMovie }) => {
    return (
        <form onSubmit={handleFilterMovie}>
            <input type="text" name="findMovie" />
            <button type="submit">Search</button>
        </form>
    )
}