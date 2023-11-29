import React from 'react';
import isEmpty from 'lodash/isEmpty';
import ReviewCard from './reviewCard';
import "../../styles/reviews.css";

function Reviews() {

    const reviews = [
        {
            name: 'Josielyn',
            location: 'Bacoor, Philippines',
            date: 'August 2023',
            review: 'Decent place to stay at. Near Matnog port, convenient for those who wanna do island hopping like we did! Sorsogon is such a beautiful and underrated destination. The locals are very nice. We arrived late at night but Aiza and Yvonne still accommodated us kindly.',
            stars: 4
        },
        {
            name: 'Takeda',
            location: 'Japan',
            date: 'March 2023',
            review: 'The staff were very kind!',
            stars: 5
        },
        {
            name: 'Yoshiko',
            location: 'Philippines',
            date: 'April 2023',
            review: 'This place was very comfortable, as their tagline says “Your home away from home” Very near in port and market. Has a very good signal, perfect for travelers that still need to work online. :) Affordable for its price since it’s the whole home that you will rent. Nanay and Ma’am Yvone were very hospitable. This is a must stay place when you are in Matnog :)',
            stars: 5
        },
        {},
        {
            name: 'Mary',
            location: 'Philippines',
            date: 'May 2023',
            review: 'Very accomodating.. had a great stay',
            stars: 4
        },
        {
            name: 'Kristina',
            location: 'Parañaque, Philippines',
            date: 'June 2023',
            review: 'Thank you for allowing us to stay in your home. Place is just 5-10min drive to Sorosogon Port. Perfect for those waiting for their trips.',
            stars: 5
        },
        {
            name: 'Brian',
            location: 'Philippines',
            date: 'June 2023',
            review: 'A real home away from home .great host family 2ho makes you feel being a part of the family. Nice clean room good internet and a strategic location. Will stay here formsure more often in the future',
            stars: 5
        },
        {},
        {
            name: 'Janice',
            location: 'Philippines',
            date: 'May 2023',
            review: 'Very accommodating and helpful host. Thank you very much for the assistance Ms. Aiza.',
            stars: 5
        },
        {
            name: 'Vacal',
            location: 'Philippines',
            date: 'October 2023',
            review: 'Perfect for travelers to spend the night with and take a quick rest from a long trip. Good location and spacious',
            stars: 4
        },
        {
            name: 'Olivier',
            location: 'Singapore',
            date: 'December 2022',
            review: 'Very welcoming hosts ! We arrived late, around 1am and they waited for us :) Location is excellent if you plan to catch the RORO in the next morning at 6-7am',
            stars: 4
        }
    ]

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
                    reviews.map((review, index) => renderReviewCards(review, index))
                }
            </ul>
        </section >
    )
}

export default Reviews;
