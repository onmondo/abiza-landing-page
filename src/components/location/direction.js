import React from "react";
import Route from "./route";
import OpenNewWindowLink from "../openNewWindowLink";
import { motion } from "framer-motion";

function Direction(props) {
    const { direction } = props;
    return (
        <>
            <dt>{direction.title}</dt>
            <dd>
                {direction.routes.map((route, index) =>
                    <article key={index}>
                        <Route route={route} />
                        {(index === direction.routes.length - 1) ? <></> : <hr />}
                    </article>
                )}
            </dd>
            <dt>Picture</dt>
            <dd>
                <a href={direction.directionUrl} target="_blank">
                    <motion.img
                        whileHover={{ opacity: 0.8 }}
                        className="startingpoint"
                        src={direction.imgSrc}
                        alt={direction.imgAlt}
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                    />
                </a>
                <OpenNewWindowLink
                    url={direction.directionUrl}
                    text={direction.title}
                />
            </dd>
        </>
    );
}

export default Direction;
