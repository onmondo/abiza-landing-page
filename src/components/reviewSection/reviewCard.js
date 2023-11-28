import React from 'react';

function ReviewCard(props) {
    const renderStars = (stars) => {
        let printedStars = '';
        while (stars > 0) {
            printedStars += '⭐';
            stars--;
        }
        return printedStars;
    }

    const { review } = props;

    return (
        <address>
            <dl>
                <dt>Stars</dt>
                <dd>{renderStars(review.stars)}</dd>
                <dt>Review</dt>
                <dd className="comments">"{review.review}"</dd>
                <dt>Name</dt>
                <dd className="reviewprofile">{review.name}</dd>
                <dt>Location</dt>
                <dd className="reviewprofile comments">{review.location}</dd>
                {/* <dt>Date</dt>
        <dd>{review.date}</dd> */}

            </dl>
        </address>
    )
}

export default ReviewCard;
