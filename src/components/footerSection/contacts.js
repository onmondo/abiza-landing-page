import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function Contacts({ phoneNumbers }) {
    return (
        <dl>
            <dt>Help</dt>
            <dd>
                <ul>
                    {
                        phoneNumbers.map((phoneNumber, index) =>
                            <li key={index}>
                                <a href={`tel:${phoneNumber.areaCode}${phoneNumber.number}`} key={index} id={phoneNumber.number}>
                                    {`(0${phoneNumber.number.substring(0, 3)}) ${phoneNumber.number.substring(3, 6)} ${phoneNumber.number.substring(6, 10)}`}
                                </a>
                            </li>
                        )
                    }
                    {/* <li>FAQs</li> */}
                    <li><Link to="/termsandcondition#refundpolicy">Refund Policy</Link></li>
                </ul>
            </dd>
        </dl>
    )
}