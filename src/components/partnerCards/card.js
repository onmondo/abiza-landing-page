import React from "react";
import QRCode from "react-qr-code";
// import oneInNewWindowIcon from '../../assets/icons8-open-in-new-window-25.png';
import OpenNewWindowLink from "../openNewWindowLink";
import { PriceTag } from "../common/pricetag";

function PartnerCard(props) {
    const { partner } = props
    return (
        <>
            <dt>Logo</dt>
            <dd><img src={partner.logo} loading="lazy" alt={partner.description} /></dd>
            <dt>Link</dt>
            <dd>
                <OpenNewWindowLink
                    url={partner.url}
                    text={partner.description}
                />
                {/* <a href={partner.url} target="blank">
                    {partner.description}
                    <img src={oneInNewWindowIcon} alt="Open in new window icon" />
                </a> */}
            </dd>
            <dt>QR Code</dt>
            <dd>
                <a href={partner.url} target="blank">
                    <QRCode value={partner.url} />
                </a>
            </dd>
            <dt>Price</dt>
            <dd>
                <PriceTag symbol={partner.currency.symbol} price={partner.price} className="price" />
            </dd>
            <dt className="extraTitle">After 2 guests, per night</dt>
            <dd>
                <PriceTag symbol={partner.currency.symbol} price={partner.guests.extra.price} className="extra" />
            </dd>
        </>
    )
}

export default PartnerCard;
