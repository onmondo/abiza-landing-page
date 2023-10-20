import React from "react";
import HeaderSection from "./headerSection/index.js";
import Navigation from "./headerSection/nav.js";
import BookingSection from "./bookingSection.js";
import DestinationSection from "./destinationSections.js";
import QRCodes from "./qrCodes.js";

function App() {
    return (
        <>
            <Navigation />
            <HeaderSection />
            <BookingSection />
            <DestinationSection />
            <QRCodes />
        </>
    )
}

export default App;
