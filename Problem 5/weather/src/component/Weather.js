import React from 'react';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
      
        };
    }
    render(){
        if(this.props.weatherInfo !== null){ //conditional rendering...
            const data = this.props.weatherInfo;
            const weatherData = data.consolidated_weather[0];
            const city = data.title;
            const country = data.parent.title;
            const timeZone = data.timezone;
            const weatherType = weatherData.weather_state_name;
            const airPressure = weatherData.air_pressure;
            const humidity = weatherData.humidity;
            const maxTemp = weatherData.max_temp;
            const minTemp = weatherData.min_temp;
            const currentTemp = weatherData.the_temp;
            const visibility = weatherData.visibility;
            const windSpeed = weatherData.wind_speed;
            let sunRise = data.sun_rise.substr(11,5);
            sunRise = (parseInt(sunRise.substr(0,2)) >= 12) ? (sunRise + " PM") : (sunRise + " AM"); 
            let sunSet = data.sun_set.substr(11,5);
            sunSet = (parseInt(sunSet.substr(0,2)) >= 12) ? (sunSet + " PM") : (sunSet + " AM"); 
            const windDirectionCompass = weatherData.wind_direction_compass;
            return(
                <>
                    <br/>
                    <div className = "main">
                        {`City Name: ${city}`}<br/>
                        {`Country: ${country}`}<br/>
                        {`Time Zone: ${timeZone}`}<br/>
                        {`Weather: ${weatherType}`}<br/>
                        {`Temperature: ${Math.round(currentTemp)} °C`}<br/>
                        {`High: ${Math.round(maxTemp)} °C`}<br/>
                        {`Low: ${Math.round(minTemp)} °C`}<br/>
                        {`Air Pressure: ${airPressure} hpa`}<br/>
                        {`Visibility: ${Math.round(visibility * 1.60934)} km`}<br/>
                        {`Wind: ${windDirectionCompass} ${Math.round(windSpeed * 1.60934)} km/hr`}<br/>
                        {`Humidity: ${humidity}%`}<br/>
                        {`Sunrise: ${sunRise}`}<br/>
                        {`Sunset: ${sunSet}`}<br/>
                        {``}<br/>
                    </div>
                </>
            );
        }else{
            return(
                <div className = "main">
    
                </div>
            );
        }
    }
        // const city =  this.props.title;
        // const weatherType =  this.props.consolidated_weather[0].weather_state_name;
        
}

export default Weather;