import React from 'react'
import "./Weather.css"
import { getLatLon, getWeather } from '../../axios/api'

export default function Weather() {

    const [weatherDetails, setWeatherDetails] = React.useState({
        lon: "",
        lat: "",
        display: "",
        temp: "",
        wind: "",
        time: "",
    })
    const [cityName, setCityName] = React.useState('')
    const [userInput, setUserInput] = React.useState("")
    // default loading
    React.useEffect(() => {
        const callWeather = async () => {
            const data = await getLatLon(null);
            console.log(data)

            setWeatherDetails((prev) => {
                return {
                    ...prev,
                    lon: data[0].lon,
                    lat: data[0].lat,
                    display: data[0].name
                }
            })
            if (weatherDetails.lon != "") {
                const WData = await getWeather(weatherDetails.lon, weatherDetails.lat);
                console.log(WData)

                setWeatherDetails((prev) => {
                    return {
                        ...prev,
                        temp: WData.current_weather.temperature,
                        wind: WData.current_weather.windspeed,
                        time: WData.current_weather.time,
                    }
                })
            }

        }
        callWeather()
    }, [])

    // Based on city loading
    React.useEffect(() => {
        const callWeather = async () => {

            const data = await getLatLon(cityName);
            console.log(data)
            if (data) {
                setWeatherDetails((prev) => {
                    return {
                        ...prev,
                        lon: data[0].lon,
                        lat: data[0].lat,
                        display: data[0].name
                    }
                })
                console.log(data)
                const WData = await getWeather(weatherDetails.lon, weatherDetails.lat)
                if (WData) {


                    setWeatherDetails((prev) => {
                        return {
                            ...prev,
                            temp: WData.current_weather.temperature,
                            wind: WData.current_weather.windspeed,
                            time: WData.current_weather.time,
                        }
                    })
                }
            }
        }
        callWeather()
    }, [cityName])

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        setCityName(userInput);
        console.log(cityName)

    }
    const onChangeHandler = (e) => {
        setUserInput(e.target.value)
    }

    return (
        <>
            <>
                <div className="weather-main-content">
                    <div className="weather-left">
                        <div className="weather-left-row1">
                        <h1>{weatherDetails.display}</h1>
                        </div>
                        <div className="weather-left-row2">
                            <div className="weather-left-row2-col1">
                                <span className="white">Temp : </span>
                             {weatherDetails.temp} ℃
                            </div>
                            <div className="weather-left-row2-col2">
                            <span className="white">Wind : </span>
                            {weatherDetails.wind} Km
                            </div>
                            <div className="weather-left-row2-col3">
                            <span className="white">Time last Recorded : </span>
                            {weatherDetails.time} 
                            </div>
                        </div>
                    </div>
                    <div className="weather-right">
                        <form action="" onSubmit={onSubmitHandler}>
                            <div className="weather-right-row1">
                                <label htmlFor="input"> City Name</label>
                            </div>
                            <div className="weather-right-row2">
                                <div className="weather-right-row2-left">
                                    <input type="text" name="" id="input" value={userInput} onChange={onChangeHandler} />
                                </div>
                                <div className="weather-right-row2-right">
                                    <button>Search</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </>
        </>
    )
}
