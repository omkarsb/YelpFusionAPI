import React, {Component} from 'react'
import WeatherAppCard from '../../components/WeatherAppCard/weatherappcard'
import './weatherappcontainer.css'

export default class WeatherAppContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            weathercontent: []
        };
    }

    render(){
        const url = 'https://gfycat.com/gifs/detail/BoldAngelicGartersnake';
        return(
            <div className="homepageMainDiv">
                <div className="providePara">
                    <ul>
                        {this.state.weathercontent}
                    </ul>
                </div>
            </div>
        )
    }
}