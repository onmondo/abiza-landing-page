import React from "react";
import oneInNewWindowIcon from '../assets/open-in-new-window-light.svg';

function OpenNewWindowLink(props) {
    const { url, text } = props;
    return (
        <a id="openWindowIcon" href={url} target="blank">
            {text}
            <img src={oneInNewWindowIcon} alt="Open in new window icon" />
        </a>
    )
}

export default OpenNewWindowLink;
