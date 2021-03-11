import React from 'react';
import axios from 'axios';
import Weather from './Weather';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city : "",
            weatherInfo : null,
        };
    }
    onChangeCity(event){
        this.setState({city : event.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const query = this.state.city;
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`,{
            headers: {"Access-Control-Allow-Origin": "*"},
            responseType : 'json',
        })
        .then(res => {
            const woeid = res.data[0].woeid;
            axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`,{
                headers: {"Access-Control-Allow-Origin": "*"},
                responseType : 'json',
            })
            .then(res => { 
                this.setState({weatherInfo : res.data});
            });
        });
    }
    render(){
        return (
            <>
                <form onSubmit = {(e) => this.onSubmit(e)}>
                    <br/>
                    <input type = "text" className = "city" placeholder = "Enter City Name" value = {this.state.city} onChange = {(event) => this.onChangeCity(event)}/>
                    <br/>
                    <br/>
                    <button type= "submit">Get Weather</button>
                </form>
                <Weather
                    weatherInfo = {this.state.weatherInfo}
                ></Weather>
            </>
        );
    }
}

export default HomePage;