// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import head from 'lodash/head'
import axios from 'axios'
import { getWithExpiry, setWithExpiry } from '../../util/localstorage'
import loading from '../../assets/loading-twotone-loop.svg'
import { motion } from 'framer-motion'
import { dashBoardVariant } from './animationVariants'

function WeatherWidget() {
  const lsWeather = getWithExpiry('matnogweather')

  const [data, setData] = useState({})

  const updateWeather = () => {
    // const weatherURL = `${OPEN_WEATHER_RESOURCE_URL}/weather?lat=${LAT}&lon=${LONG}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
    try {
      // eslint-disable-next-line no-undef
      const weatherURL = OPEN_WEATHER_RESOURCE_URL
      axios.get(weatherURL).then((response) => {
        // console.log('response.data', response);
        setWithExpiry('matnogweather', response.data, 14400000)
        setData(response.data)
      })
    } catch (err) {
      throw new Error('Something wrong with the weather API', err.message)
    }
  }

  useEffect(() => {
    // console.count('WeatherWidget useEffect runs!');
    if (lsWeather) {
      setData(lsWeather)
    } else {
      updateWeather()
    }
  }, [])

  // console.count('component WeatherWidget rendered!');

  return (
    <motion.dl
      className="weather"
      variants={dashBoardVariant}
    >
      <dt>Weather</dt>
      {
        (data?.weather && head(data.weather)?.icon)
          ?
          <>
            <dd id="weatherlocation">{data?.name}</dd>
            <dd id="temp">{data?.main?.feels_like}°</dd>
            <dd id="weatherIcon">
              {/* <img
                src={`${OPEN_WEATHER_IMG_URL}/wn/${head(data.weather)?.icon}@2x.png`}
                alt="Current weather icon"
                className="weather"
                loading="lazy"
              /> */}
            </dd>
            <dd id="weatherdetails">
              {head(data.weather)?.description}
            </dd>
          </>
          :
          <dd id="weatherButton">
            <img src={loading} role="presentation" alt="Loading GIF from Giphy" />
          </dd>
      }
    </motion.dl>
  )
}

export default WeatherWidget
