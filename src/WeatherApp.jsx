import SearchBox from "./SearchBox.jsx"
import  InfoBox from "./InfoBox.jsx";
// import InfoBox from "./infoBox.jsx";
import {useState} from 'react'
export default function WeatherApp(){
  const [weatherInfo,setweatherInfo]=useState({
    city:"wonderland",
    temp: 25.05, // add this
    feelsLike:24.84,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",
    pressure: 1013 
  });
  let updateInfo= (newInfo) =>{
    setweatherInfo(newInfo);
  };
  return (
    <div style={{textAlign:"center"}}>
        <h1>Weather app </h1>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo}/>
    </div>
  );
}