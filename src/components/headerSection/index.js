import React from "react";
import beachImage from '../../assets/vecteezy_beautiful-tropical-beach-background_2299654.jpg'
import logo from '../../assets/logo-transparent.png';
// import mouse from '../../assets/mouse-scroll.svg';
import homestay from '../../assets/homestay.png';

function HeaderSection(props) {
    const copyToClipboardHandler = (event, phoneNumber) => {
        event.preventDefault();
        navigator.clipboard.writeText(`${phoneNumber.areaCode}${phoneNumber.number}`)
    }

    return (
        <>
            <article id="aboutme">
                <header>
                    <h1>Discover tranquility at <em>Abiza Homestay</em></h1>
                    <p className="description">Explore the charm, savor the serenity, and make memories that linger long after you leave. Welcome to a place where every guest is family.</p>
                    <p className="description">Your Homestay Journey Begins Here.</p>
                </header>
                <section id="contactus">
                    <address>
                        <dl>
                            <dt>📱 Phone</dt>
                            {
                                props.phoneNumbers.map((phoneNumber, index) =>
                                    <dd key={index}>
                                        <a href="#" id={phoneNumber.number} onClick={() => { copyToClipboardHandler(event, phoneNumber) }}>
                                            {`${phoneNumber.areaCode}-${phoneNumber.number}`}
                                        </a>
                                    </dd>
                                )
                            }
                        </dl>
                        <dl>
                            <dt>📧 Email Address</dt>
                            <dd><a href="mailto:aizablando7@gmail.com">aizablando7@gmail.com</a></dd>
                        </dl>
                        <dl>
                            <dt>🗺️ Location</dt>
                            <dd><a href={process.env.GMAP_LOCATION} target="blank">Hidhid Matnog Sorsogon</a></dd>
                        </dl>
                    </address>
                </section>
            </article>
            <section id="promote">
                <section className="homestayreview">
                    <a className="mainroom" href={process.env.AIRBNB_ROOM1} target="blank">
                        <img className="profilepic" src={homestay} loading="lazy" alt="Glimpse of the homestay" />
                    </a>
                    <header>
                        <h4><a href={process.env.AIRBNB_ROOM1} target="blank">Abiza Homestay</a> <aside>&#127775; (4.5)</aside></h4>
                        <blockquote >Starts from <aside>Php 953.00</aside></blockquote>
                    </header>
                </section>
                <img className="backgroundimg" src={beachImage} loading="lazy" alt="One of the travel destinations - Subic Beach"></img>
                {/* <img id="promotelogo" src={logo} loading="lazy"></img> */}
            </section>
        </>

    )
}

export default HeaderSection;
