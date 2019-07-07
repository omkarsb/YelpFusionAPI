import React, {Component} from 'react'
import Timestamp from 'react-timestamp';
import {dragElement} from '../../JavascriptFunctions/DraggableElement'
//import Geolocation from 'react-geolocation'
import './profilecard.css'
import { GoogleMap, Map, InfoWindow, Marker, GoogleApiWrapper, MapWithAMarker} from 'google-maps-react';

class ProfileCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Temp: '',
            lat: 0,
            lng: 0,
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
            Temp: this.props.cards.Data.main.temp,
            lat: this.props.cards.Data.coord.lat,
            lng: this.props.cards.Data.coord.lon
        })
    }
 
    render(){        
        const temp = this.props.cards.Data.main.temp;
        const icon = "http://openweathermap.org/img/w/" + this.props.cards.Data.weather[0].icon + ".png"
        const main = this.props.cards.Data.main;
        const style = {

            position: 'relative',
            height: '150px',
            width: '100%'
        }
        
        //const cardmain = card.temp;

        return(
            <div className="ProfileCard__MainDiv" onClick={dragElement}>
                    <div className="ProfileCard__MainDiv__Header">
                    <span className="ProfileCard__MainDiv__Header__CityName">{this.props.cards.NameOnCard}</span>
                        <span onClick={this.handleTemp}>{"\xB0"}C | {"\xB0"}F</span>
                    </div>
                    <div className="ProfileCard__MainDiv__Body">
                        <span className="ProfileCard__MainDiv__Body__Temp"> {JSON.stringify(this.state.Temp)}{"\xB0"}{this.state.tempUnit} </span>
                        <div className="ProfileCard__MainDiv__Body__IconDescTag">
                            <img src={icon} />
                            {this.props.cards.Data.weather[0].description}
                        </div>
                    </div>
                    <div style={style}>
                         <Map google={this.props.google} zoom={12} initialCenter={{
                            lat: this.state.lat,
                            lng: this.state.lng
                        }}>
                            <Marker onClick={this.onMarkerClick}
                                    name={'Current location'}
                                    position={{lat : this.state.lat, lng : this.state.lng }}/>

                        </Map>
                    </div>
                    <div className="ProfileCard__MainDiv__Footer">
                        <Timestamp time={this.props.cards.Data.dt} format='full' includeDay />
                    </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBJ7MnqgHV0GzVG31gByJ4eClVm4pUp5Fg'
  })(ProfileCard)