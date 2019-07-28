import React, {Component} from 'react'
import yelpfusionService from '../../services/yelpfusionService'
import YelpFusionCard from "../../components/YelpFusionCard/yelpfusioncard";
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactCardFlip from 'react-card-flip';
import './yelpappcontainer.css'


export default class YelpAppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            experiences: [],
            locations: '',
            categoriess: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.handleLocations = this.handleLocations.bind(this);
    }

    async handleClick(){
        const res = await yelpfusionService.get(this.state.locations, this.state.categoriess);
        //const res = await yelpfusionService.getCalifornia();
        this.setState({ experiences: res.data.businesses });
        console.log(this.state.experiences);
        console.log(React.version);
    }

    handleCategories(e){
        console.log("handleCategory"+this.state.experiences)
        this.setState({ categoriess: e.target.value });
    }

    handleLocations(e){
        this.setState({locations: e.target.value});
    }

    // async componentWillMount() {
    //     // Get Experiences
    //     const res = await yelpfusionService.getAll();
    //     this.setState({ experiences: res.data.businesses });
    //     console.log(process.env.REACT_APP_YELP_FUSION_API_KEY)
    //     //console.log("From fusion container will mount")
    // }


    render(){
        console.log(this.state.experiences);
        //console.log("From fusion container render")
        return(
            <div  className="yelpFusionContainer">
                <div className="yelpFusionContainer__Icon">
                    <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/developer_pages/b2ca299e2633/assets/img/318x90_yelp_fusion.png" srcSet="https://s3-media2.fl.yelpcdn.com/assets/srv0/developer_pages/ec5c515bef5c/assets/img/318x90_yelp_fusion@2x.png 2x" width="318" className="media--fluid"/>                 
                    (Powered By)
                </div>
                <div className="yelpFusionContainer__Search">
                    <span style={{margin: '10px', fontSize: '20px'}}>What are we looking for today?</span>
                    <div className="yelpFusionContainer__Search__SearchBar">
                    <Input
                        placeholder="Breakfast Brunch"
                        className="Input"
                        onChange={(e) => {
                            //console.log("Category Change " + e.target.value + " "+ this.state.experiences)
                            this.handleCategories(e)
                        }}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <span style={{margin: '10px', fontSize: '20px'}}>in</span>
                    <Input
                        placeholder="New York"
                        className="Input"
                        onChange={(e) => {this.handleLocations(e)}}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <Button style={{margin:'10px'}} variant="contained" color="primary" className='submit' onClick={this.handleClick} >
                        Find
                    </Button>
                    </div>
                </div>
                <div className="yelpFusionContainer__yelpFusionCardHolder">
                
                    {this.state.experiences.map(number => <YelpFusionCard exp={number}/>)}
                    {console.log("From fusion container render")}

                    {/* <div>{"From Container : "+JSON.stringify(this.state.experiences)}</div> */}
                </div>
            </div>
        )
    }
}