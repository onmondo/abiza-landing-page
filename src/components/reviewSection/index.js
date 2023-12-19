import React from 'react';
import isEmpty from 'lodash/isEmpty';
import ReviewCard from './reviewCard';
// import { useMediaQuery } from 'react-responsive';
import reviews from './reviews.json'
import "../../styles/reviews.css";

function Reviews() {
    // const isMobile = useMediaQuery({ query: `(max-width: 535px)` });

    const filteredReviews = (reviews) =>
        reviews.filter((review) =>
            review.active === true
        )


    const renderReviewCards = (review, index) => {
        if (isEmpty(review)) {
            return (
                <li key={index} className='reviewspacer'>
                    <ReviewCard review={review} />
                </li>
            )
        }
        return (
            <li key={index}>
                <ReviewCard review={review} />
            </li>
        )
    }

    return (
        <section id='reviews' >
            <ul>
                {
                    filteredReviews(reviews).map((review, index) => renderReviewCards(review, index))
                }
            </ul>
        </section >
    )
}

export default Reviews;
