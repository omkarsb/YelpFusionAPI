import React, {Component} from 'react';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-brands-svg-icons";
import ReactSVG from 'react-svg';

import Typed from 'react-typed';

import apiListService from '../../services/apiListService'

import WelcomePage from '../../components/WelcomePage/welcomepage' 
import './homepagecontainer.css'

export default class HomePageContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            temp : this.props.exp,
            apiList : []
        };
        this.handleClick = this.handleClick.bind(this);
    //    this.handleCategories = this.handleCategories.bind(this);
    }

    handleClick(){

    }


    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
      

    async componentWillMount(){
        var res = await  apiListService.getCategories();
        var filteres = this.shuffle(res.data)
        this.setState({apiList : filteres})
        console.log(this.state.apiList[0])
    }

    render(){
        const url = 'https://gfycat.com/gifs/detail/BoldAngelicGartersnake';
        return(
            <div className="homepageMainDiv">
                
                <div className="homepageMainDiv__Row">
                    <div className="homepageMainDiv__Name">
                        <span>OMKAR SAWANT BHOSLE</span>
                    </div>
                </div>

                <div className="homepageMainDiv__Row">
                    <div className="homepageMainDiv__Dev">
                        <span>WEB DEVELOPER</span>
                    </div>
                </div>
 
                <div className="homepageMainDiv__Row">
                
                    <div className="homepageMainDiv__API__Header">            
                        <span>I </span>
                        <span className="homepageMainDiv__API__Icon">    
                            <ReactSVG src={require("../../img/react-icons.svg")} />
                        </span>
                        <span>working with APIs</span><br/>
                    </div>

                    <div className="homepageMainDiv__API">
                    {'{ '}
                    <Typed 
                        strings={this.state.apiList}
                        // strings={['sadasdas']}
                        typeSpeed={40}
                        backSpeed={50}
                        backDelay={1000} 
                        loop >
                    </Typed>
                    {' }'}
                    </div>

                    <div className="homepageMainDiv__API__Desc">            
                        <span>APIs have opened up opportunites. (^)So many categories, so much data! </span> 
                        <span>They have changed the Web Scene.</span>
                        <span>Web Frameworks have smoothened out to consume them.</span>
                        <span>I'm on a mission to contribute to and witness this amalgamation of Data and UI!</span>
                    </div>
                </div>  

                <div className="homepageMainDiv__Row">
                    <div className="homepageMainDiv__Button">
                        <Button style={{margin:'10px'}} variant="contained" color="primary" className='submit' onClick={this.handleClick} >
                            CHECK MY WORK
                        </Button>
                    </div>
                    {/* <WelcomePage/> */}
                </div>
            </div>
        )
    }
}