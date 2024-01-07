import React from "react";
import "../styles/destinationSection.css";

function DestinationSection() {
    return (
        <section id="destination" className="fullbleed">
            <header>
                <h2>Popular Destinations</h2>
                <p className="description videos">See our popular destinations that our client choose</p>
            </header>
            <ul>
                <li>
                    <address>
                        <dl>
                            {/* <dt>Title</dt> */}
                            {/* <dd>Lorem ipsum</dd> */}
                            <dt>Description</dt>
                            <dd>
                                <p className="description videos">
                                    📹 <a href="https://www.youtube.com/watch?v=Z7-pPssBQbw" target="_blank">Beautiful waters and sceneries of Sorsogon (Full episode) | Biyahe ni Drew</a> by <a href="https://www.youtube.com/@gmapublicaffairs" target="_blank">GMA Public Affairs</a>
                                </p>
                            </dd>
                            <dt>Video</dt>
                            <dd>
                                <iframe src="https://www.youtube.com/embed/Z7-pPssBQbw?si=LOjiSL72yz3201qv&amp;controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </dd>
                        </dl>
                    </address>
                </li>
                <li>
                    <address>
                        <dl>
                            {/* <dt>Title</dt>
                            <dd>Sit amet tellus</dd> */}
                            <dt>Description</dt>
                            <dd>
                                <p className="description videos">
                                    📹 <a href="https://www.youtube.com/watch?v=9Y9v1PrrLG8" target="_blank">Biyahe ni Drew: Relaxing trip in Sorsogon | Full Episode</a> by <a href="https://www.youtube.com/@gmapublicaffairs" target="_blank">GMA Public Affairs</a>
                                </p>
                            </dd>
                            <dt>Video</dt>
                            <dd>
                                <iframe src="https://www.youtube.com/embed/9Y9v1PrrLG8?si=w_E2xqLsdSCyiM1l&amp;controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </dd>
                        </dl>
                    </address>
                </li>
                <li>
                    <address>
                        <dl>
                            {/* <dt>Title</dt>
                            <dd>Sit amet tellus</dd> */}
                            <dt>Description</dt>
                            <dd>
                                <p className="description videos">
                                    Ad
                                </p>
                            </dd>
                            <dt>Video</dt>
                            <dd>
                                <div id="container-1f431b9e246d1bdd442126a4f6549222"></div>
                            </dd>
                        </dl>
                    </address>
                </li>
                <li>
                    <address>
                        <dl>
                            {/* <dt>Title</dt>
                            <dd>Habitant morbi</dd> */}
                            <dt>Description</dt>
                            <dd>
                                <p className="description videos">
                                    📹 <a href="https://www.youtube.com/watch?v=bcfnuDQgjUg" target="_blank">Nature spring sa Sorsogon, puwedeng paliguan at inumin?! | Biyahe ni Drew</a> by <a href="https://www.youtube.com/@gmapublicaffairs" target="_blank">GMA Public Affairs</a>
                                </p>
                            </dd>
                            <dt>Video</dt>
                            <dd>
                                <iframe src="https://www.youtube.com/embed/bcfnuDQgjUg?si=O5liTRCFiZWjUl_i&amp;controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </dd>
                        </dl>
                    </address>
                </li>
            </ul>
        </section>
    )
}

export default DestinationSection;
