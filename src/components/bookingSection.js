import React, { Component } from "react";
import airbnb from '../assets/airbnb-logo.png';
import agoda from '../assets/agoda-logo.png';
import bookingDotCom from '../assets/booking-dot-com-logo.png';

class BookingSection extends Component {
    render() {
        return (
            <section id="travelpartner">
                <header>
                    <h3>Our Travel Partner</h3>
                </header>
                <ul>
                    <li><img src={airbnb}></img></li>
                    <li><img src={agoda}></img></li>
                    <li><img src={bookingDotCom}></img></li>
                </ul>
            </section>
        )
    }
}

export default BookingSection;
