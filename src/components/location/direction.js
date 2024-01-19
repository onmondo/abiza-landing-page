import React from "react";
import Route from "./route";
import oneInNewWindowIcon from '../../assets/icons8-open-in-new-window-25.png';

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
                <a className="directiontitle" href={direction.directionUrl} target="_blank">
                    {direction.title}
                    <img className="openWindowIcon" src={oneInNewWindowIcon} alt="Open in new window icon" />
                </a>
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
