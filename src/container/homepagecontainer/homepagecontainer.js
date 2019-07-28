import React, {Component} from 'react'
import './homepagecontainer.css'

export default class HomePageContainer extends Component{
    render(){
        const url = 'https://gfycat.com/gifs/detail/BoldAngelicGartersnake';
        return(
            <div className="homepageMainDiv">
                <div className="providePara">
                    Welcome
                </div>
                <div className="providePara">
                
                <video  width="100%" autoPlay loop>
                    <source src="https://gfycat.com/gifs/detail/GrandGraciousGallinule" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
                </div>
            </div>
        )
    }
}