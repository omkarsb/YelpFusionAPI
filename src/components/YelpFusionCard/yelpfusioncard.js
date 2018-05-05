import React, {Component} from 'react'
import yelpfusionService from '../../services/yelpfusionService'

export default class YelpFusionCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            experiences: []
        };
    }

    async componentDidMount() {
        // Get Experiences
        const res = await yelpfusionService.getAll();
        this.setState({ experiences: res.data });
        console.log(process.env.REACT_APP_YELP_API_KEY)
    }

    render(){
        console.log(this.state.experiences);
        return(
            <div className="">
                <div className="">
                </div>
            </div>
        )
    }
}