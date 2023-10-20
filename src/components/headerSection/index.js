import React from "react";
import beachImage from '../../assets/background-one.jpg'
import logo from '../../assets/logo-transparent.png';
// import mouse from '../../assets/mouse-scroll.svg';
import homestay from '../../assets/homestay.png';

function HeaderSection() {
    const phoneNumber = {
        areaCode: '+63',
        number: '9177053956'
    }

    const copyToClipboardHandler = (event) => {
        event.preventDefault();
        console.log(event)
        navigator.clipboard.writeText(getPhoneNumber())
    }

    const getPhoneNumber = () =>
        `${phoneNumber.areaCode}-${phoneNumber.number}`

    return (
        <>
            <article id="aboutme">
                <header>
                    <h1>Discover tranquility at <em>Abiza Homestay</em></h1>
                    <p className="description">Disconnect from the bustle, connect with tranquility.</p>
                </header>
                <section id="contactus">
                    <address>
                        <dl>
                            <dt>&#128241; Phone</dt>
                            <dd><a href="#" onClick={copyToClipboardHandler}>{getPhoneNumber()}</a></dd>
                        </dl>
                        <dl>
                            <dt>&#128231; Email Address</dt>
                            <dd><a href="mailto:aizablando7@gmail.com">aizablando7@gmail.com</a></dd>
                        </dl>
                        <dl>
                            <dt>&#128231; Location Pin</dt>
                            <dd><a href={process.env.GMAP_LOCATION} target="blank">Map</a></dd>
                        </dl>
                    </address>
                </section>
            </article>
            <section id="promote">
                <section className="homestayreview">
                    <a className="mainroom" href={process.env.AIRBNB_ROOM1} target="blank">
                        <img className="profilepic" src={homestay} loading="lazy" />
                    </a>
                    <header>
                        <h4><a href={process.env.AIRBNB_ROOM1}>Abiza Homestay</a> <aside>&#127775; (4.5)</aside></h4>
                        <blockquote className="description">Starts from <aside>Php 999.00</aside></blockquote>
                    </header>
                </section>
                <img className="backgroundimg" src={beachImage} loading="lazy"></img>
                <img id="promotelogo" src={logo} loading="lazy"></img>
            </section>
        </>

    )
}

export default HeaderSection;
