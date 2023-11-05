import { fetchReviews } from "api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [find, setFind] = useState(false);
    const params = useParams();

    useEffect(() => {
        if (!params.movieId) {
            return;
        }
        async function getReviews() {
            try {
                const reviewFind = await fetchReviews(params.movieId);
                if (!reviewFind.results) {
                    setFind(false)
                    return;
                }
                setFind(true)
                setReviews(reviewFind.results)
            } catch (error) { }
        }
        getReviews();
    }, [params.movieId])

    return (
        <>
            {!find && <span>Do not have....</span>}
            {find && <ul>
                {reviews.map(item =>
                    <li key={item.id}>
                        <p>Author: {item.author}</p>
                        <p>{item.content}</p>
                    </li>
                )}
            </ul>}
        </>
    )
}

export default Reviews;