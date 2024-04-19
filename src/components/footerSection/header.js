import React from "react";

export function Header({ websiteName }) {
    return (
        <header>
            <p className="description">Thank you for visiting {websiteName}. We invite you to explore our cozy retreat and experience the warmth of a home away from home. Whether you're seeking relaxation or adventure, our homestay is your gateway to a memorable stay.</p>
            <p className="description">Book your stay now and embark on a journey where comfort meets hospitality. We look forward to hosting you and making your stay truly special.</p>
            <p className="description">{websiteName} - Where Every Stay Feels Like Coming Home.</p>
        </header>
    )
}