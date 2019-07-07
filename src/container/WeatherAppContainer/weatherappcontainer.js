/*global google*/
import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import WeatherAppCard from '../../components/WeatherAppCard/weatherappcard'
import WeatherAppCardBack from '../../components/WeatherAppCard/weatherappcardback'
import weatherAppService from '../../services/weatherAppService';
import TextField from '@material-ui/core/TextField';
import './weatherappcontainer.css'
import Geosuggest from 'react-geosuggest';
import { GoogleMap, Map, InfoWindow, Marker, GoogleApiWrapper, MapWithAMarker} from 'google-maps-react';



class WeatherAppContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            Data:[],
            Main:[],
            Weather: [],
            lat: [],
            long: []
        };
        
       this.handleChange = this.handleChange.bind(this);
       this.onSuggestSelect = this.onSuggestSelect.bind(this);
    //    this.setCurrentLocation = this.setCurrentLocation.bind(this);
    }

    async onSuggestSelect(event){
        const res = await weatherAppService.getByLocation(event.location);
        // const res = await weatherAppService.getAll();
        this.setState({
                 Data: res.data,
                 NameOnCard : event.label
             }); 
    }

    handleChange(event) {
        this.setState({LocationText: event.target.value});

    }

    async componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
             console.log(position);
             this.setStateAsync({
                lat: position.coords.latitude,
                long: position.coords.longitude
                });
            },
            (error) => alert(error.message)
          );
          this.setState({loading: true});
          alert("From WillMount" + this.state.lat);
          const res = await weatherAppService.getAll();
          // const res = await weatherAppService.getAll();
          this.setState({
                   Data: res.data
               });
          this.setState({loading: false});   
    }


    setStateAsync(state) {
        return new Promise((resolve) => {
          this.setState(state, resolve)
        });
      }

    async componentDidMount(){
        alert("From DidMount" + this.state.lat);
    }

       renderView(){ 
           
        var fixtures = [
            {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
            {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
            {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
          ];

            return(
                <div className="homepageMainDiv">
                    <div className="providePara">
                            <Geosuggest
                            ref={el=>this._geoSuggest=el}
                            placeholder="Start typing!"
                            initialValue="Hamburg"
                            fixtures={fixtures}
                            onSuggestSelect={this.onSuggestSelect}
                            location={new google.maps.LatLng(53.558572, 9.9278215)}
                            radius="20" />
                        <WeatherAppCard cards={this.state}/>
                    </div>
                </div>
            )
        }

    render(){
        return this.state.loading ? (
            <div className="spinner">
              <Loader 
                    type="Puff"
                    color="#00BFFF"
                    height="100"	
                    width="100"
                />
            </div>
          ) : this.renderView();
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDZl2LHeb46sOW8lBsePwriM1EyLDiC9qw'
  })(WeatherAppContainer)