import React from "react";
import QRCode from "react-qr-code";
import oneInNewWindowIcon from '../../assets/icons8-open-in-new-window-25.png';

function PartnerCards(props) {
    const { partners } = props
    console.log('process.env', process.env)
    return (
        <address>
            {partners.map((partner, index) => {
                return (
                    <dl key={index}>
                        <dt>Logo</dt>
                        <dd><img src={partner.logo} loading="lazy" alt={partner.description} /></dd>
                        <dt>Link</dt>
                        <dd>
                            <a href={partner.url} target="blank">
                                {partner.description}
                                <img src={oneInNewWindowIcon} alt="Open in new window icon" />
                            </a>
                        </dd>
                        <dt>QR Code</dt>
                        <dd>
                            <a href={partner.url} target="blank">
                                <QRCode value={partner.url} />
                            </a>
                        </dd>
                        <dt>Price</dt>
                        <dd className="price">
                            <blockquote>
                                {partner.currency.symbol}{partner.price}<aside>.00{partner.currency.name}</aside>
                            </blockquote>
                        </dd>
                        <dt className="extra">After 2 guests, per night</dt>
                        <dd className="extra">
                            <blockquote>
                                {partner.currency.symbol}{partner.guests.extra.price}<aside>.00{partner.currency.name}</aside>
                            </blockquote>
                        </dd>
                    </dl>
                )
            })}

        </address>
    )
}

export default PartnerCards;
