import React from "react";

function Route(props) {
    const { route } = props;

    return (
        <article>
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
            </address>
        </article>
    )
}

export default Route;
