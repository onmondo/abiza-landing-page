import React from "react";

function OpenNewWindowLink(props) {
    const { assignedClassName, url } = props;
    return (
        <a className={assignedClassName} href={url} target="blank">
            {/* child component here... */}
            <img className="openWindowIcon" src={oneInNewWindowIcon} alt="Open in new window icon" />
        </a>
    )
}

export default OpenNewWindowLink;
