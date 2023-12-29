import React from "react";
import PartnerCard from "./card";

function PartnerCards(props) {
    const { partners } = props
    return (
        <address>
            {partners.map((partner, index) => {
                return (
                    <dl key={index}>
                        <PartnerCard partner={partner} />
                    </dl>
                )
            })}

        </address>
    )
}

export default PartnerCards;
