import React, {Component} from 'react'
import Timestamp from 'react-timestamp';

import './weatherappcardback.css'



export default class WeatherAppCardBack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Temp: '',
            tempUnit: 'C',
            isCelcius: true
        };
       this.handleTemp = this.handleTemp.bind(this);
    }

    handleTemp(){
        this.setState(prevState => ({
            isCelcius: !prevState.isCelcius
          }));
        if(this.state.isCelcius==true){
            this.setState({Temp: this.props.cards.Data.main.temp, tempUnit: 'C'})
        }
        if(this.state.isCelcius==false){
            const intTemp = parseInt(this.props.cards.Data.main.temp);
            const farTemp = (intTemp*1.8)+32;
            this.setState({Temp: farTemp, tempUnit: 'F'})
        }
    }

    componentWillMount(){
        this.setState({
            Temp: this.props.cards.Data.main.temp
        })
    }
 
    render(){        
        const temp = this.props.cards.Data.main.temp;
        const icon = "http://openweathermap.org/img/w/" + this.props.cards.Data.weather[0].icon + ".png"
        const main = this.props.cards.Data.main;
        
        //const cardmain = card.temp;

        return(
            <div className="WeatherAppCardBack__MainDiv">
                    <div className="WeatherAppCardBack__MainDiv__Header">
                        <span className="WeatherAppCardBack__MainDiv__Header__CityName">{this.props.cards.Data.name}</span>
                        <span onClick={this.handleTemp}>{"\xB0"}C | {"\xB0"}F</span>
                    </div>
                    <div className="WeatherAppCardBack__MainDiv__Body">
                        <span className="WeatherAppCardBack__MainDiv__Body__Temp"> {JSON.stringify(this.state.Temp)}{"\xB0"}{this.state.tempUnit} </span>
                        <div className="WeatherAppCardBack__MainDiv__Body__IconDescTag">
                            <img src={icon} />
                            {this.props.cards.Data.weather[0].description}
                        </div>
                    </div>
                    <div className="WeatherAppCardBack__MainDiv__Footer">
                        <Timestamp time={this.props.cards.Data.dt} format='full' includeDay />
                    </div>
            </div>
        )
    }
}