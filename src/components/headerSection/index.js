import React, { Component } from "react";
import beachImage from '../../assets/background-one.jpg'
import logo from '../../assets/logo-transparent.png';
// import mouse from '../../assets/mouse-scroll.svg';
import homestay from '../../assets/homestay.png';

const phoneNumber = {
    areaCode: '+63',
    number: '9177053956'
}

function copyToClipboard() {

    navigator.clipboard.writeText(getPhoneNumber())
}

function getPhoneNumber() {
    return `${phoneNumber.areaCode}-${phoneNumber.number}`
}

function showQRCodes() {

}

function HeaderSection() {
    return (
        <>
            <article id="aboutme">
                <header>
                    <h1>Discover tranquility at Abiza Homestay</h1>
                    <p className="description">Disconnect from the bustle, connect with tranquility.</p>
                </header>
                <section>
                    <address>
                        <dl>
                            <dt>&#128241; Phone</dt>
                            <dd><a href="#" onClick={copyToClipboard}>{getPhoneNumber()}</a></dd>
                        </dl>
                        <dl>
                            <dt>&#128231; Email Address</dt>
                            <dd><a href="mailto:aizablando7@gmail.com">aizablando7@gmail.com</a></dd>
                        </dl>
                    </address>
                </section>
            </article>
            <section id="promote">
                <section className="homestayreview">
                    <a className="mainroom" href="https://airbnb.com/h/abiza" target="blank">
                        <img className="profilepic" src={homestay} loading="lazy" />
                    </a>
                    <header>
                        <h4>Abiza Homestay <aside>&#127775; (4.5)</aside></h4>
                        <h5 className="description">Starts from <aside>Php 999.00</aside></h5>
                    </header>
                </section>
                <img className="backgroundimg" src={beachImage} loading="lazy"></img>
                <span id="promotetop"></span>
                <span id="promotebottom">
                    <img src={logo} loading="lazy"></img>
                </span>
            </section>
        </>

    )
}

export default HeaderSection;
