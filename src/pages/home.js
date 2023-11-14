import React from "react";
import HeaderSection from "../components/headerSection/index.js";
import BookingSection from "../components/bookingSection.js";
import DestinationSection from "../components/destinationSections.js";
import Reviews from "../components/reviews.js";

function Home(props) {
    return (
        <>
            <HeaderSection
                phoneNumbers={props.phoneNumbers}
                copyToClipboardHandler={props.copyToClipboardHandler}
            />
            <BookingSection />
            <DestinationSection />
            <Reviews />
        </>
    )
}

export default Home;
