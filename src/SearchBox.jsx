import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
   
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    const GEO_API_URL = import.meta.env.VITE_GEO_API_URL;
    const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getWeatherInfo = async () => {
        try {
           
            const geoResponse = await fetch(`${GEO_API_URL}?q=${city}&appid=${API_KEY}`);
            const geoData = await geoResponse.json();

            const longitude = geoData[0].lon;
            const latitude = geoData[0].lat;

            
            const weatherResponse = await fetch(
                `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            const weatherData = await weatherResponse.json();

            const result = {
                city,
                temp: weatherData.main.temp,
                tempMax: weatherData.main.temp_max,
                tempMin: weatherData.main.temp_min,
                pressure: weatherData.main.pressure,
                feelsLike: weatherData.main.feels_like,
                weather: weatherData.weather[0].description,
                humidity: weatherData.main.humidity,
            };

            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(city);
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity('');
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City name *"
                    variant="outlined"
                    onChange={handleChange}
                    value={city}
                    required
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        input: { color: 'black' },
                    }}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p>No such place exists!</p>}
            </form>
        </div>
    );
}
