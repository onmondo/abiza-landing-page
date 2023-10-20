import React from "react";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';

function BookingSection() {
    return (
        <section id="travelpartner">
            <header>
                <h3>Our Travel Partner</h3>
            </header>
            <ul>
                <li>
                    <a className="mainroom" href="https://airbnb.com/h/abiza" target="blank">
                        <img src={airbnb} />
                    </a>
                </li>
                <li>
                    <a className="secondary" href="https://airbnb.com/h/abiza2" target="blank">
                        <img src={airbnb} /><span>new</span>
                    </a>
                </li>
                <li>
                    <a className="mainroom" href="https://www.agoda.com/en-us/pages/agoda/default/page_hotel.aspx?hotel_id=42077085" target="blank">
                        <img src={agoda}></img>
                    </a>
                </li>
                <li>
                    <a className="secondary" href="https://www.agoda.com/abiza-homestay/hotel/matnog-ph.html?hotel_id=35077109" target="blank">
                        <img src={agoda}></img><span>new</span>
                    </a>
                </li>
                <li>
                    <a className="mainroom" href="https://www.booking.com/hotel/ph/abiza-homestay.en-gb.html?aid=304142" target="blank">
                        <img src={bookingDotCom}></img>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default BookingSection;
