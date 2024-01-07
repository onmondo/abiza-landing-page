import React, { useState, useEffect } from 'react';
import head from "lodash/head";
import axios from "axios";
import { getWithExpiry, setWithExpiry } from '../../util/localstorage';
import loading from '../../assets/loading-giphy.gif'

function WeatherWidget() {
    const lsWeather = getWithExpiry('matnogweather');

    const [data, setData] = useState({});

    const updateWeather = () => {
        // const weatherURL = `${process.env.OPEN_WEATHER_RESOURCE_URL}/weather?lat=${process.env.LAT}&lon=${process.env.LONG}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
        const weatherURL = process.env.OPEN_WEATHER_RESOURCE_URL;
        axios.get(weatherURL).then((response) => {
            // console.log('response.data', response);
            setWithExpiry('matnogweather', response.data, 14400000)
            setData(response.data);
        })
    }

    useEffect(() => {
        // console.count('WeatherWidget useEffect runs!');
        if (lsWeather) {
            setData(lsWeather)
        } else {
            updateWeather();
        }
    }, [])

    // console.count('component WeatherWidget rendered!');

    return (
        <dl className="weather">
            <dt>Weather</dt>
            {
                (data?.weather && head(data.weather)?.icon)
                    ?
                    <>
                        <dd id="weatherlocation">{data?.name}</dd>
                        <dd id="temp">{data?.main?.feels_like}°</dd>
                        <dd id="weatherIcon">
                            <img
                                src={`${process.env.OPEN_WEATHER_IMG_URL}/wn/${head(data.weather)?.icon}@2x.png`}
                                alt="Current weather icon"
                                className="weather"
                                loading="lazy"
                            />
                        </dd>
                        <dd id="weatherdetails">
                            {head(data.weather)?.description}
                        </dd>
                    </>
                    : <dd id="weatherButton">
                        <img src={loading} alt="Loading GIF from Giphy" />
                    </dd>
            }

        </dl>
    )
    // return (
    //     <dl className="weather">
    //         <dt>Weather</dt>
    //         <dd id="weatherButton">
    //             <img src={loading} alt="Loading GIF from Giphy" />
    //             {/* <iframe src="https://giphy.com/embed/L05HgB2h6qICDs5Sms" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/crearecreativita-loading-load-creare-creativita-L05HgB2h6qICDs5Sms">via GIPHY</a></p> */}
    //         </dd>
    //     </dl>

    // )
}

export default WeatherWidget;
