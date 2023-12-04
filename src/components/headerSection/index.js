import React from "react";
import head from "lodash/head";
import axios from "axios";
import beachImage from '../../assets/vecteezy_beautiful-tropical-beach-background_2299654.jpg'
// import logo from '../../assets/logo-transparent.png';
// import mouse from '../../assets/mouse-scroll.svg';
import homestay from '../../assets/homestay.png';
import copyIcon from '../../assets/icons8-copy-24.png';
import refreshIcon from '../../assets/icons8-refresh-30.png';
import "../../styles/headerSection.css";
import "../../styles/contactUs.css";

function HeaderSection(props) {
    const [data, setData] = React.useState({});

    const updateWeather = (event) => {
        event.preventDefault();
        const weatherURL = `${process.env.OPEN_WEATHER_RESOURCE_URL}/weather?lat=${process.env.LAT}&lon=${process.env.LONG}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
        axios.get(weatherURL).then((response) => {
            console.log('response.data', response.data);
            setData(response.data);
        })
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
                        <dl className="phonenumber">
                            <dt>Phone</dt>
                            {
                                props.phoneNumbers.map((phoneNumber, index) =>
                                    <dd key={index}>
                                        {`${phoneNumber.areaCode}-${phoneNumber.number}`}
                                        &#160;
                                        <a href="#" id={phoneNumber.number} onClick={() => { props.copyToClipboardHandler(event, phoneNumber) }}>
                                            <img src={copyIcon} alt="Copy icon" />
                                        </a>
                                    </dd>
                                )
                            }
                        </dl>
                        <dl className="weather">
                            {/* <dt>Weather <a href="#" onClick={() => { updateWeather(event) }}><img src={refreshIcon} alt="Refresh icon to get current weather" /></a></dt> */}
                            <dt>Weather</dt>
                            {
                                (data?.weather && head(data.weather)?.icon)
                                    ?
                                    <>
                                        <dd id="weatherlocation">{data?.name}</dd>
                                        <dd id="temp">{data?.main?.feels_like}°C</dd>
                                        <dd id="weatherIcon">
                                            <img
                                                src={`${process.env.OPEN_WEATHER_IMG_URL}/wn/${head(data.weather)?.icon}@2x.png`}
                                                alt="Current weather icon"
                                                className="weather"
                                                loading="lazy"
                                            />
                                        </dd>
                                    </>
                                    : <dd id="weatherButton"><a className="weatherButton" href="#" onClick={() => { updateWeather(event) }}>Matnog weather update</a></dd>
                            }

                        </dl>
                        {/* <dl>
                            <dt>📧 Email Address</dt>
                            <dd><a href="mailto:aizablando7@gmail.com">aizablando7@gmail.com</a></dd>
                        </dl> */}
                        {/* <dl>
                            <dt>🗺️ Location</dt>
                            <dd><a href={process.env.GMAP_LOCATION} target="blank">Hidhid Matnog Sorsogon</a></dd>
                        </dl> */}
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
