import React from "react";
import oneInNewWindowIcon from '../assets/icons8-open-in-new-window-25.png';

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
