import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    // Image URLs
    const INIT_URL =
        'https://images.unsplash.com/photo-1754851361624-fb8351390ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D';
    const HOT_URL =
        'https://plus.unsplash.com/premium_photo-1726369487541-f92bc0c45430?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhvdCUyMGltYWdlfGVufDB8fDB8fHww';
    const COLD_URL =
        'https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGltYWdlfGVufDB8fDB8fHww';
    const RAIN_URL =
        'https://images.unsplash.com/photo-1712435779831-52550a820e40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D';

    // Select image based on weather conditions
    const getImageUrl = () => {
        if (info.humidity > 80) return RAIN_URL;
        if (info.temp > 15) return HOT_URL;
        return COLD_URL;
    };

    // Select icon based on weather conditions
    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon />;
        if (info.temp > 15) return <WbSunnyIcon />;
        return <SevereColdIcon />;
    };

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ width: 400, height: 400 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={getImageUrl()}
                        title={info.city}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {getWeatherIcon()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature = {info.temp}°C<br />
                            Humidity = {info.humidity}%<br />
                            Min Temp = {info.tempMin}°C<br />
                            Max Temp = {info.tempMax}°C
                        </Typography>
                    </CardContent>
                    <CardActions />
                </Card>
            </div>
        </div>
    );
}
