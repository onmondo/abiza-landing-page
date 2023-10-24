import React from "react";

function FooterSection() {
    return (
        <footer id="aboutus" className="fullbleed">
            <header>
                {/* <h2>Footer</h2> */}
                <p className="description">See our popular destinations that our client choose</p>
            </header>
            <address>
                <dl>
                    <dt>Company</dt>
                    <dd>
                        <ul>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Customers</li>
                            <li>Packages</li>
                            <li>Community</li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>Help</dt>
                    <dd>
                        <ul>
                            <li>Support</li>
                            <li>FAQs</li>
                            <li>Refund Policy</li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>Attribution</dt>
                    <dd>
                        <ul>
                            <li>
                                <a href="https://www.vecteezy.com/png/21971442-blue-watercolor-stain-watercolor-background" target="blank">
                                    Background PNGs
                                </a>
                                &#160;by&#160;
                                <a href="https://www.vecteezy.com/members/illustration4stock224427" target="blank">
                                    Ovidiu Timplaru
                                </a>
                                &#160;/&#160;
                                <a href="https://www.vecteezy.com/">
                                    Vecteezy
                                </a>
                            </li>
                            <li>
                                <a href="https://www.vecteezy.com/photo/2299654-beautiful-tropical-beach-background" target="blank">
                                    Free Stock photos
                                </a>
                                &#160;by&#160;
                                <a href="https://www.vecteezy.com/members/siraphol-siricharattakul">
                                    Siraphol Siricharattakul
                                </a>
                                &#160;/&#160;
                                <a href="https://www.vecteezy.com/">
                                    Vecteezy
                                </a>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </address>
        </footer>
    )
}

export default FooterSection;
