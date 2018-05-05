import React, {Component} from 'react'
import { SocialIcon } from 'react-social-icons';

import './footer.css'

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="MainLabel">
                    <img className="footerLogo" src={require('../../img/footerlogo.png')} />
                </div>
                <div className="SocialMedia">
                    <div className="SocialMediaBlock">
                        <SocialIcon url="https://www.linkedin.com/in/omkar-s-73345782/" />
                    </div>
                    <div>
                        <SocialIcon url="https://www.facebook.com/omkarsb" />
                    </div>
                </div>
            </div>
        )
    }
}