import React, { Component } from "react";
import beachImage from '../../assets/background-one.jpg'
import logo from '../../assets/logo-transparent.png';
// import mouse from '../../assets/mouse-scroll.svg';
import homestay from '../../assets/homestay.png';

class HeaderSection extends Component {
    render() {
        return (
            <>
                <article id="aboutme">
                    <header>
                        <h1>Discover tranquility at Abiza Homestay</h1>
                        <p className="description">Disconnect from the bustle, connect with tranquility.</p>
                    </header>
                </article>
                <section id="promote">
                    <section className="homestayreview">
                        <img className="profilepic" src={homestay} loading="lazy"></img>
                        <header>
                            <h4>Abiza Homestay</h4>
                            <p className="description">Starts from Php400</p>
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
}

export default HeaderSection;
