import React, { Component } from "react";
import HeaderSection from "./headerSection/index.js";
import Navigation from "./headerSection/nav.js";
import BookingSection from "./bookingSection.js";
import DestinationSection from "./destinationSections.js";

class App extends Component {
    render() {
        return (
            <>
                <Navigation />
                <HeaderSection />
                <BookingSection />
                <DestinationSection />
            </>
        )
    }
}

export default App;
