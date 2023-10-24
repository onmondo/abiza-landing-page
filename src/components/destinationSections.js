import React from "react";

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
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </dd>
                            <dt>Video</dt>
                            <dd>
                                <iframe src="https://www.youtube.com/embed/Z7-pPssBQbw?si=LOjiSL72yz3201qv&amp;controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                                    Sit amet tellus cras adipiscing enim eu turpis.
                                </p>
                            </dd>
                            <dt>Video</dt>
                            <dd>
                                <iframe src="https://www.youtube.com/embed/9Y9v1PrrLG8?si=w_E2xqLsdSCyiM1l&amp;controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                                    Habitant morbi tristique senectus et.
                                </p>
                            </dd>
                            <dt>Video</dt>
                            <dd>
                                <iframe src="https://www.youtube.com/embed/bcfnuDQgjUg?si=O5liTRCFiZWjUl_i&amp;controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </dd>
                        </dl>
                    </address>
                </li>
            </ul>
        </section>
    )
}

export default DestinationSection;
