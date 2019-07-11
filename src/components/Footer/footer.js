import React, {Component} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
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
                        <a href="https://www.linkedin.com/in/omkar-s-73345782/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                    </div>
                    <div className="SocialMediaBlock">
                        <a href="https://www.facebook.com/omkarsb" target="_blank"><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                    </div>
                </div>
            </div>
        )
    }
}