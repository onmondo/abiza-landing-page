import React from "react";
import HeaderSection from "../components/headerSection/index.js";
import BookingSection from "../components/bookingSection.js";
import DestinationSection from "../components/destinationSections.js";
import Reviews from "../components/reviewSection/index.js";
import Amenities from "../components/amenities.js";
import PinLocation from "../components/location.js";

function Home(props) {
    console.log('props', props);
    return (
        <>
            <HeaderSection
                phoneNumbers={props.phoneNumbers}
                copyToClipboardHandler={props.copyToClipboardHandler}
            />
            <BookingSection openPage={props.openPage} />
            <Amenities websiteName={props.websiteName} />
            <DestinationSection />
            <Reviews />
            <PinLocation />
        </>
    )
}

export default Home;
