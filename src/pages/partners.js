import React from "react";
import PartnerCards from "../components/partnerCards";
import "../styles/partners.css";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';
// import partners from './partners.json'

const partners = [
    {
        "partner": "Airbnb",
        "description": "Airbnb Room 1",
        "logo": airbnb,
        "url": process.env.AIRBNB_ROOM1,
        "price": "953",
        "currency": {
            "symbol": "₱",
            "name": "PHP"
        },
        "guests": {
            "maxCapacity": 3,
            "extra": {
                "price": "500"
            }
        }
    },
    {
        "partner": "Airbnb",
        "description": "Airbnb Room 2",
        "logo": airbnb,
        "url": process.env.AIRBNB_ROOM2,
        "price": "953",
        "currency": {
            "symbol": "₱",
            "name": "PHP"
        },
        "guests": {
            "maxCapacity": 3,
            "extra": {
                "price": "500"
            }
        }
    },
    {
        "partner": "Agoda",
        "description": "Agoda Room 1",
        "logo": agoda,
        "url": process.env.AGODA_ROOM1,
        "price": "953",
        "currency": {
            "symbol": "₱",
            "name": "PHP"
        },
        "guests": {
            "maxCapacity": 3,
            "extra": {
                "price": "500"
            }
        }
    },
    {
        "partner": "Agoda",
        "description": "Agoda Room 2",
        "logo": agoda,
        "url": process.env.AGODA_ROOM2,
        "price": "953",
        "currency": {
            "symbol": "₱",
            "name": "PHP"
        },
        "guests": {
            "maxCapacity": 3,
            "extra": {
                "price": "500"
            }
        }
    },
    {
        "partner": "Booking.com",
        "description": "Booking.com room 1 & 2",
        "logo": bookingDotCom,
        "url": process.env.BOOKING_DOT_COM_ROOMS,
        "price": "953",
        "currency": {
            "symbol": "₱",
            "name": "PHP"
        },
        "guests": {
            "maxCapacity": 3,
            "extra": {
                "price": "500"
            }
        }
    }
]

function Partners(props) {
    return (
        <section id="partners">
            <header>
                <h2>Our Travel Partners</h2>
                <p className="description">Step into a world of unparalleled hospitality with our curated selection of homestays on Airbnb, Agoda, and Booking.com.</p>
                <p className="description">Whether you're seeking a cozy retreat, cultural immersion, or a luxurious escape, our platforms offer a diverse range of accommodations to make your stay truly extraordinary.</p>
                <p className="description">Embrace the comfort of a home, the convenience of seamless booking, and the joy of discovering new destinations—all with Airbnb, Agoda, and Booking.com.</p>
            </header>
            <PartnerCards partners={partners} />
        </section>
    )
}

export default Partners;
