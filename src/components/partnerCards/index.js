import React from "react";
import PartnerCard from "./card";

function PartnerCards(props) {
    const { partners } = props
    console.log('process.env', process.env)
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
