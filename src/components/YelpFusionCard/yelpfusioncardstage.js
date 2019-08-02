// not in use

import React, {Component} from 'react'
import ReactCardFlip from 'react-card-flip';
import YelpFusionCard from './yelpfusioncard'
import { GoogleMap, Map, InfoWindow, Marker, GoogleApiWrapper, MapWithAMarker} from 'google-maps-react';

class YelpFusionCardStage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp : this.props.exp,
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    //    this.handleCategories = this.handleCategories.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
 
    render(){    
            
        return(
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <YelpFusionCard key="front" exp={this.state.temp}/>    
            <YelpFusionCard key="back" exp={this.state.temp}/>
        </ReactCardFlip>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBJ7MnqgHV0GzVG31gByJ4eClVm4pUp5Fg'
  })(YelpFusionCardStage)