/*global google*/
import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import WeatherAppCard from '../../components/ProfileCard/profilecard'
import weatherAppService from '../../services/weatherAppService';
import TextField from '@material-ui/core/TextField';
import Geosuggest from 'react-geosuggest';
import { GoogleMap, Map, InfoWindow, Marker, GoogleApiWrapper, MapWithAMarker} from 'google-maps-react';



class ProfileCardContainer extends Component{
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
       this.handleChange = this.handleChange.bind(this);    //    this.setCurrentLocation = this.setCurrentLocation.bind(this);
    }


    handleChange(event) {
        this.setState({LocationText: event.target.value});

    }

    async componentWillMount(){
          this.setState({loading: true});
          const res = await weatherAppService.getAll();
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

       renderView(){ 
           
        const url = 'https://gfycat.com/gifs/detail/BoldAngelicGartersnake';
            return(
                <div className="homepageMainDiv">
                    <div className="providePara">
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

export default ProfileCardContainer