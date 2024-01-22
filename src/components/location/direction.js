import React from "react";
import Route from "./route";
import OpenNewWindowLink from '../openNewWindowLink'

function Direction(props) {
    const { direction } = props;
    return (
        <dl>
            <dt>{direction.title}</dt>
            <dd>
                {direction.routes.map((route, index) =>
                    <Route key={index} route={route} />
                )}
            </dd>
            <dt>Open map details</dt>
            <dd>
                <OpenNewWindowLink
                    url={direction.directionUrl}
                    text={direction.title}
                />
            </dd>
            <dt>Picture</dt>
            <dd>
                <a href={direction.directionUrl} target="_blank">
                    <img
                        className="startingpoint"
                        src={direction.imgSrc}
                        alt={direction.imgAlt}
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                    />
                </a>
            </dd>
        </dl>
    );
}

export default Direction;
