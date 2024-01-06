import React from "react";

function AmenitiesModal(props) {
    const { amenities, state, viewImage } = props;
    const firstAmenities = amenities.slice(0, 4)
    const secondAmenities = amenities.slice(4)
    return (
        <section className="modal" id="amenitiesModal" style={{ visibility: state.visibility }}>
            <header>
                <a href="#amenities" onClick={() => { viewImage(event, 'closeAmenities', state.selectedAmenity, state.selectedAlt) }}>
                    Close [X]
                </a>
            </header>
            <ul id="firstAmenities">
                {
                    firstAmenities.map((amenity, index) => {
                        return (
                            <li key={index}>
                                <img src={amenity.src}
                                    alt={amenity.alt}
                                    loading="lazy"
                                />
                            </li>

                        )
                    })
                }
            </ul>
            <ul id="secondAmenities">
                {
                    secondAmenities.map((amenity, index) => {
                        return (
                            <li key={index}>
                                <img src={amenity.src}
                                    alt={amenity.alt}
                                    loading="lazy"
                                />
                            </li>

                        )
                    })
                }
            </ul>
        </section>
    )
}

export default AmenitiesModal;
