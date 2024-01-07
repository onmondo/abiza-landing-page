import React from "react";
import "../styles/location.css";

function PinLocation() {
    return (
        <section id="location" className="fullbleed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.244003079996!2d124.03206517508171!3d12.631991422232986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0cf4c22a170c3%3A0x22822b3cd7388925!2sABIZA%20Homestay!5e0!3m2!1sen!2sph!4v1700377950576!5m2!1sen!2sph" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}

export default PinLocation;
