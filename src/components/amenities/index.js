import React, { useReducer, useState, useEffect } from 'react'
import homestay from '../../assets/homestay.png';
import room1A from '../../assets/room1A.jpeg';
import room1B from '../../assets/room1B.jpeg';
import room2A from '../../assets/room2A.jpeg';
import room2B from '../../assets/room2B.jpeg';
import crA from '../../assets/crA.jpeg';
import crB from '../../assets/crB.jpeg';
import parking from '../../assets/parking.jpg';
import "../../styles/amenities.css";
import AmenitiesModal from './modal';
import { Blurhash } from "react-blurhash";

function Amenities(props) {
    const amenities = [
        {
            src: homestay,
            alt: 'The house',
            hash: 'LVFicG9FD%sS_NIoRQn$yXW;V?s.'
        },
        {
            src: room1A,
            alt: 'Room 1 A',
            hash: 'LUKKyf~qD%RkM}-pt6oJ%1D%axt7'
        },
        {
            src: room1B,
            alt: 'Room 1 B',
            hash: 'LPPPy89v~q-pyE$|?abI%Mo#t7bH',
        },
        {
            src: room2A,
            alt: 'Room 2 A',
            hash: 'LTNTqC~p_N009a-;-;IU-;M_IU%M'
        },
        {
            src: room2B,
            alt: 'Room 2 B',
            hash: 'LaLqIa~WM~M_S%xvaISP%2RObds,'
        },
        {
            src: crA,
            alt: 'Rest Room A',
            hash: 'LIIhdHofxutR_NM{xuof%MM{xuof'
        },
        {
            src: crB,
            alt: 'Rest Room B',
            hash: 'LKIX]hV@IUoe_NRjIUj[xaWBM{fQ',
        },
        {
            src: parking,
            alt: 'Parking',
            hash: 'LRI=iIVrxvR%tpoLWTxv?vxZofox'
        }
    ]
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'preViewAmenity':
                return {
                    selectedAmenity: action.amenity,
                    selectedAlt: action.alt,
                    selectedHash: action.hash,
                    visibility: 'hidden'
                };
            case 'viewAmenities':
                return {
                    selectedAmenity: action.amenity,
                    selectedAlt: action.alt,
                    selectedHash: action.hash,
                    visibility: 'visible'
                }
            case 'closeAmenities':
                return {
                    selectedAmenity: action.amenity,
                    selectedAlt: action.alt,
                    selectedHash: action.hash,
                    visibility: 'hidden'
                }
            default:
                throw new Error();
        }
    }, {
        selectedHash: amenities[0].hash,
        selectedAmenity: amenities[0].src,
        selectedAlt: amenities[0].alt,
        visibility: 'hidden'
        // isAmenityViewed: false 
    });

    const viewImage = (event, type, amenity, alt, hash) => {
        event.preventDefault()
        dispatch({ type, amenity, alt, hash });
    };

    const [featureImageLoaded, setFeatureImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setFeatureImageLoaded(true)
        }
        img.src = state.selectedAmenity
    }, [state.selectedAmenity])

    const lastAmenityItem = () => {
        const amenity = amenities[4];
        const totalAmenities = amenities.length;
        const remainingAmenities = totalAmenities - 4;
        return (
            <li className="lastAmenityItem" key={4}>
                <img src={amenity.src}
                    className="amenityselection"
                    alt={amenity.alt}
                    loading="lazy"
                    decoding="async"
                    role="presentation"
                    onClick={() => { viewImage(event, 'preViewAmenity', amenity.src, amenity.alt, amenity.hash) }}
                />
                <a href="#amenities" onClick={() => { viewImage(event, 'viewAmenities', amenity.src, amenity.alt, amenity.hash) }}>
                    Show all photos ({remainingAmenities})
                </a>
            </li>
        )
    }

    return (
        <>
            <section id="amenities">
                <header>
                    <h2>Intimate Comfort, Memorable Stay</h2>
                    {/* <p className="description">Step into a world of comfort at our homestay, where each detail is designed for your relaxation. Our cozy retreat boasts two inviting bedrooms, each generously accommodating up to three guests. Sink into plush bedding and enjoy a peaceful night's sleep in a space tailored for your utmost comfort.</p> */}
                    <p className="description">Discover comfort at our homestay with two inviting bedrooms for up to three guests each. Enjoy plush bedding and a peaceful night's sleep. Our spacious comfort room with a refreshing shower provides a tranquil escape and all amenities for a rejuvenating stay.</p>
                    <p className="description">At {props.websiteName}, we redefine hospitality, ensuring your visit is not just a stay but a collection of unforgettable moments. Welcome to a home where comfort meets charm.</p>
                </header>
                <ul>
                    <li className="feature" autoFocus>
                        <>
                            <Blurhash
                                hash={state.selectedHash}
                                punch={1}
                                src={state.selectedAmenity}
                                style={{ display: featureImageLoaded ? "none" : "inline" }}
                                loading="lazy"
                                decoding="async"
                                role="presentation"
                                alt={state.selectedAlt}
                                width={656}
                                height={656}
                            />
                            <img
                                src={state.selectedAmenity}
                                loading="lazy"
                                decoding="async"
                                role="presentation"
                                alt="Featured amenity - entire house"
                                style={{ display: !featureImageLoaded ? "none" : "inline" }}
                            />
                        </>
                    </li>
                    <li className="otherpic">
                        <ul>
                            {
                                amenities.map((amenity, index) => {
                                    if (index < 3) {
                                        if (index === 0) {
                                            return (
                                                <li className="firstAmenityItem" key={index}>
                                                    <img src={amenity.src}
                                                        className="amenityselection"
                                                        alt={amenity.alt}
                                                        loading="lazy"
                                                        decoding="async"
                                                        role="presentation"
                                                        onClick={() => { viewImage(event, 'preViewAmenity', amenity.src, amenity.alt, amenity.hash) }}
                                                    />
                                                </li>
                                            )
                                        }
                                        return (
                                            <li key={index}>
                                                <img src={amenity.src}
                                                    className="amenityselection"
                                                    alt={amenity.alt}
                                                    loading="lazy"
                                                    decoding="async"
                                                    role="presentation"
                                                    onClick={() => { viewImage(event, 'preViewAmenity', amenity.src, amenity.alt, amenity.hash) }}
                                                />
                                            </li>
                                        )
                                    }
                                })
                            }
                            {lastAmenityItem()}
                        </ul>
                    </li>
                </ul>
                {/* {
                (state.isAmenityViewed && state.selectedAmenity)
                    ? <section className='preViewAmenity'>
                        <header><h5><a href='#' onClick={() => { viewImage(event, 'closeAmenities') }}>Close</a></h5></header>
                        <img src={state.selectedAmenity} />
                    </section>
                    : <></>
            } */}

            </section>
            <AmenitiesModal amenities={amenities} state={state} viewImage={viewImage} />
        </>
    )
}

export default Amenities;