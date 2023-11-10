import React from "react";
import HeaderSection from "./headerSection/index.js";
import Navigation from "./headerSection/nav.js";
import BookingSection from "./bookingSection.js";
import DestinationSection from "./destinationSections.js";
import FooterSection from "./footerSection.js";
import Reviews from "./reviews.js";

function App() {
    return (
        <>
            <Navigation />
            <HeaderSection />
            <BookingSection />
            <DestinationSection />
            <Reviews />
            <FooterSection />
        </>
    )
}

export default App;
