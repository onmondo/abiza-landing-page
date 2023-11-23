import React from 'react'
import homestay from '../assets/homestay.png';
import room1A from '../assets/room1A.jpeg';
import room1B from '../assets/room1B.jpeg';
import room2A from '../assets/room2A.jpeg';
import room2B from '../assets/room2B.jpeg';
import crA from '../assets/crA.jpeg';
import crB from '../assets/crB.jpeg';
import parking from '../assets/parking.jpg';

function Amenities(props) {
    const amenities = [
        {
            src: homestay,
            alt: 'The house'
        },
        {
            src: room1A,
            alt: 'Room 1 A'
        },
        {
            src: room1B,
            alt: 'Room 1 B'
        },
        {
            src: room2A,
            alt: 'Room 2 A'
        },
        {
            src: room2B,
            alt: 'Room 2 B'
        },
        {
            src: crA,
            alt: 'Rest Room A'
        },
        {
            src: crB,
            alt: 'Rest Room B'
        },
        {
            src: parking,
            alt: 'Parking'
        }
    ]
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'viewAmenity':
                return {
                    selectedAmenity: action.amenity,
                    selectedAlt: action.alt,
                    // isAmenityViewed: true
                };
            // case 'closeAmenities':
            //     return {
            //         isAmenityViewed: false
            //     }
            default:
                throw new Error();
        }
    }, {
        selectedAmenity: amenities[0].src,
        selectedAlt: amenities[0].alt,
        // isAmenityViewed: false 
    });

    const viewImage = (event, type, amenity) => {
        event.preventDefault()
        dispatch({ type, amenity });
    };

    return (
        <section id="amenities">
            <header>
                <h2>Intimate Comfort, Memorable Stay</h2>
                <p className="description">Step into a world of comfort at our homestay, where each detail is designed for your relaxation. Our cozy retreat boasts two inviting bedrooms, each generously accommodating up to three guests. Sink into plush bedding and enjoy a peaceful night's sleep in a space tailored for your utmost comfort.</p>
                <p className="description">Our spacious comfort room, featuring a refreshing shower, offers a tranquil escape after a day of exploration. Immerse yourself in the soothing ambiance, complete with all the amenities needed for a rejuvenating stay.</p>
                <p className="description">At {props.websiteName}, we redefine hospitality, ensuring your visit is not just a stay but a collection of unforgettable moments. Welcome to a home where comfort meets charm.</p>
            </header>
            <ul>
                <li className='feature'>
                    <img
                        src={state.selectedAmenity}
                        loading="lazy"
                        alt={state.selectedAlt}
                    />
                </li>
                <li className='otherpic'>
                    <ul>
                        {
                            amenities.map((amenity, index) => {
                                return (
                                    <li key={index}>
                                        <img src={amenity.src}
                                            className='amenityselection'
                                            alt={amenity.alt}
                                            loading="lazy"
                                            onClick={() => { viewImage(event, 'viewAmenity', amenity.src, amenity.alt) }}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
            {/* {
                (state.isAmenityViewed && state.selectedAmenity)
                    ? <section className='viewamenity'>
                        <header><h5><a href='#' onClick={() => { viewImage(event, 'closeAmenities') }}>Close</a></h5></header>
                        <img src={state.selectedAmenity} />
                    </section>
                    : <></>
            } */}

        </section>
    )
}

export default Amenities;