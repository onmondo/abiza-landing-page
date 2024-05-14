import React from "react";
import QRCode from "react-qr-code";

function Route(props) {
    const { route, direction } = props;

    return (
        <>
            <header>
                <h4>{route.id}</h4>
            </header>
            {/* <ul>
                {route.details.map((detail, index) =>
                    <li key={index}><p>{detail}</p></li>
                )}
            </ul> */}
            {/* <hr /> */}
            <address className="traveltime">
                <dl>
                    <dt>Estimated time</dt>
                    <dd>{route.estimatedTime}</dd>
                </dl>
                <dl>
                    <dt>Distance</dt>
                    <dd>{route.distance}</dd>
                </dl>
                <dl>
                    <dd><QRCode value={direction.directionUrl} /></dd>
                </dl>
            </address>
        </>
    )
}

export default Route;
