import React, { Component } from "react";
import HeaderSection from "./headerSection/index.js";
import Navigation from "./headerSection/nav.js";
import BookingSection from "./bookingSection.js";

class App extends Component {
    render() {
        return (
            <>
                <Navigation />
                <HeaderSection />
                <BookingSection />
            </>
        )
    }
}

export default App;
