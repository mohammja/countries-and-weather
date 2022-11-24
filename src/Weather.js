import {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({country}) =>{
    const [weather,setWeather] = useState(null);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const API_KEY = process.env.REACT_APP_API_KEY 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${API_KEY}`)
        .then(response => {
            console.log(response.data);
            setWeather(response.data);
        }).catch(error =>{
            setError(error);
        })
        weather !== null  && console.log(weather);
    },[])

    if(error){
        return `Error: ${error.message}`;
    }

    return(
        <div>
            {weather !== null && <p>Temperature: {weather.main.temp} &#8451; and feels like : {weather.main.feels_like} &#8451;</p>}
            {weather !== null && <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"></img>}
            {weather !== null && <p> wind : {weather.wind.speed} m/s</p>}
            <hr />
        </div>
    )
}

export default Weather;