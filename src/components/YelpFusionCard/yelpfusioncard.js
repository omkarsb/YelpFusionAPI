import React, {Component} from 'react'
import Timestamp from 'react-timestamp';
import {dragElement} from '../../JavascriptFunctions/DraggableElement'
//import Geolocation from 'react-geolocation'
import './yelpfusioncard.css'
import StarRatings from 'react-star-ratings';
import ReactCardFlip from 'react-card-flip';
import { GoogleMap, Map, InfoWindow, Marker, GoogleApiWrapper, MapWithAMarker} from 'google-maps-react';

class YelpFusionCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp : this.props.exp,
            isFlipped: false,
            currLatLong: {
                lat: 0,
                long: 0
            }
        };
        this.handleClick = this.handleClick.bind(this);
    //    this.handleCategories = this.handleCategories.bind(this);
    }

    // handleTemp(){
    //     this.setState(prevState => ({
    //         isCelcius: !prevState.isCelcius
    //       }));
    //     if(this.state.isCelcius==true){
    //         this.setState({Temp: this.props.exp.Data.main.temp, tempUnit: 'C'})
    //     }
    //     if(this.state.isCelcius==false){
    //         const intTemp = parseInt(this.props.exp.Data.main.temp);
    //         const farTemp = (intTemp*1.8)+32;
    //         this.setState({Temp: farTemp, tempUnit: 'F'})
    //     }
    // }

    static getDerivedStateFromProps(props, state){
        // console.log('this is from recieve props')
        // console.log(props)
        // console.log(state)
        if(props.exp.id !== state.temp.id){
            return{
                temp : props.exp,
            }
        }
    }


    componentDidMount(){
        this.getGeoLocation()
    }

    getGeoLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              this.setState(prevState => ({
                currLatLong: {
                    ...prevState.currentLatLng,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            }))
            }
          )
        } else {
          error => console.log(error)
        }
      }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(this.props.exp)
    //     if (this.props.exp !== prevProps.temp) {
    //         this.setState({temp : this.props.exp.businesses});
    //     }
    //   }
 
    render(){    
        //const temp = this.props.exp.Data.main.temp;
        //const icon = "http://openweathermap.org/img/w/" + this.props.exp.Data.weather[0].icon + ".png"
        //const main = this.props.exp.Data.main;
        //const cardmain = card.temp;

        let cat2,cat3

        if(this.state.temp.categories[1]){
            cat2 = " | "+this.state.temp.categories[1].title
        }
        if(this.state.temp.categories[2]){
            cat3 = " | " + this.state.temp.categories[2].title
        }

            
        return(
            <div className="YelpFusionCard__MainDiv" onClick={dragElement}>
                    <div className="YelpFusionCard__MainDiv__Header">
                        <div className="YelpFusionCard__MainDiv__Header__Name">
                            {this.state.temp.name}
                            {/* {this.state.currLatLong.lat} */}
                        </div>
                        <div className="YelpFusionCard__MainDiv__Header__Categories">
                            {this.state.temp.categories[0].title}
                            {cat2}
                            {cat3}

                        </div>
                        <div className="YelpFusionCard__MainDiv__Header__Phone">
                            {this.state.temp.display_phone}
                        </div>
                    </div>
                    <div className="YelpFusionCard__MainDiv__Body">
                        <div className="YelpFusionCard__MainDiv__Body__IconDescTag">
                            <img src={this.state.temp.image_url} width={"100%"} height={"150px"}/>
                        </div>
                        <div className="YelpFusionCard__MainDiv__Body__Ratings">
                        Ratings:<StarRatings
                                rating={this.state.temp.rating}
                                starDimension="20px"
                                starSpacing="2px"
                                name='Rating:'
                                starRatedColor='rgb(50,200,255)'
                            />{this.state.temp.rating}
                            <a target="_blank" href={this.state.temp.url}>
                                <span>Reviews(</span>{this.state.temp.review_count}<span>)</span>
                            </a>
                        </div>
                    </div>



                    <div className="YelpFusionCard__MainDiv__Footer">
                            <Map google={this.props.google} style={{height: '150px'}} zoom={14} initialCenter={{
                                lat: this.state.temp.coordinates.latitude,
                                lng: this.state.temp.coordinates.longitude
                            }}>
                                <Marker onClick={this.onMarkerClick}
                                        name={'Current location'}
                                        position={{lat : this.state.temp.coordinates.latitude, lng : this.state.temp.coordinates.longitude }}/>

                            </Map>
                    </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBJ7MnqgHV0GzVG31gByJ4eClVm4pUp5Fg'
  })(YelpFusionCard)