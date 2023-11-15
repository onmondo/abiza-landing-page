import React from 'react';

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
            name: 'Kristina',
            location: 'Parañaque, Philippines',
            date: 'June 2023',
            review: 'Thank you for allowing us to stay in your home. Place is just 5-10min drive to Sorosogon Port. Perfect for those waiting for their trips.',
            stars: 5
        },
        {
            name: 'Yoshiko',
            location: 'Philippines',
            date: 'April 2023',
            review: 'This place was very comfortable, as their tagline says “Your home away from home” Very near in port and market. Has a very good signal, perfect for travelers that still need to work online. :) Affordable for its price since it’s the whole home that you will rent. Nanay and Ma’am Yvone were very hospitable. This is a must stay place when you are in Matnog :)',
            stars: 5
        },
        {
            name: 'Olivier',
            location: 'Singapore',
            date: 'December 2022',
            review: 'Very welcoming hosts ! We arrived late, around 1am and they waited for us :) Location is excellent if you plan to catch the RORO in the next morning at 6-7am',
            stars: 4
        }

    ]

    const renderStars = (stars) => {
        let printedStars = '';
        while (stars > 0) {
            printedStars += '⭐';
            stars--;
        }
        return printedStars;
    }

    return (
        <section id='reviews' >
            <ul>
                {
                    reviews.map((review, index) =>
                        <li key={index}>
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
                        </li>
                    )
                }
            </ul>
        </section >
    )
}

export default Reviews;
