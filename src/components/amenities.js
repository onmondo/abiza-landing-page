import React from 'react'
import room1A from '../assets/room1A.jpeg';
import room1B from '../assets/room1B.jpeg';
import room2A from '../assets/room2A.jpeg';
import room2B from '../assets/room2B.jpeg';
import crA from '../assets/crA.jpeg';
import crB from '../assets/crB.jpeg';
import parking from '../assets/parking.jpg';

function Amenities(props) {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'viewAmenity':
                return {
                    selectedAmenity: action.amenity,
                    isAmenityViewed: true
                };
            case 'closeAmenities':
                return {
                    isAmenityViewed: false
                }
            default:
                throw new Error();
        }
    }, { selectedAmenity: '', isAmenityViewed: false });

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
                        src={room1A}
                        className='amenityselection'
                        alt="Room 1 A"
                        onClick={() => { viewImage(event, 'viewAmenity', room1A) }}
                    />
                </li>
                <li className='otherpic'>
                    <ul>
                        <li>
                            <img src={parking}
                                className='amenityselection'
                                alt="Parking"
                                onClick={() => { viewImage(event, 'viewAmenity', parking) }}
                            />
                        </li>
                        <li>
                            <img src={crA} className='amenityselection'
                                alt="Rest Room A"
                                onClick={() => { viewImage(event, 'viewAmenity', crA) }}
                            />
                        </li>
                        <li>
                            <img src={crB} className='amenityselection'
                                alt="Rest Room B"
                                onClick={() => { viewImage(event, 'viewAmenity', crB) }}
                            />
                        </li>
                        <li>
                            <img src={room1B}
                                className='amenityselection'
                                alt="Room 1 B"
                                onClick={() => { viewImage(event, 'viewAmenity', room1B) }}
                            />
                        </li>
                        <li>
                            <img src={room2A}
                                className='amenityselection'
                                alt="Room 2 A"
                                onClick={() => { viewImage(event, 'viewAmenity', room2A) }}
                            />
                        </li>
                        <li>
                            <img src={room2B}
                                className='amenityselection'
                                alt="Room 2 B"
                                onClick={() => { viewImage(event, 'viewAmenity', room2B) }}
                            />
                        </li>
                    </ul>
                </li>
            </ul>
            {
                (state.isAmenityViewed && state.selectedAmenity)
                    ? <section className='viewamenity'>
                        <header><h5><a href='#' onClick={() => { viewImage(event, 'closeAmenities') }}>Close</a></h5></header>
                        <img src={state.selectedAmenity} />
                    </section>
                    : <></>
            }

        </section>
    )
}

export default Amenities;