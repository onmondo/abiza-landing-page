import React from "react";
import HeaderSection from "../components/headerSection/index.js";
import BookingSection from "../components/bookingSection.js";
import DestinationSection from "../components/destinationSections.js";
import Reviews from "../components/reviewSection/index.js";
import Amenities from "../components/amenities";
import PinLocation from "../components/location/index.js";

function Home(props) {
    return (
        <>
            <HeaderSection
                phoneNumbers={props.phoneNumbers}
                copyToClipboardHandler={props.copyToClipboardHandler}
            />
            <BookingSection openPage={props.openPage} />
            <Amenities websiteName={props.websiteName} amenities={props.amenities} />
            <DestinationSection />
            <Reviews />
            <PinLocation />
        </>
    )
}

export default Home;
